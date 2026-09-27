# ChemPlus Pharma - Next.js Application

A modern pharmaceutical trading platform built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🏥 Pharmaceutical product catalog
- 📧 Contact form with email notifications
- 🎨 Modern, responsive UI
- 🌙 Dark mode support
- 🔥 Deployed on Firebase App Hosting (Docker also supported)
- 📦 Modular architecture

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Email**: Resend
- **Deployment**: Firebase App Hosting (primary), Docker (alternative)

## Getting Started

### Prerequisites

- Node.js 20 or higher
- pnpm 10
- Firebase CLI (for deployment) — see [Deploying to Firebase App Hosting](#deploying-to-firebase-app-hosting)

### Local Development

1. **Get the source**: unzip the project archive and `cd` into the folder.

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` if you need non-default values:
   - `EMAIL_FROM`: Sender email address
   - `EMAIL_TO`: Recipient email address

4. **Run development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── actions/           # Server actions (contact form email)
│   ├── api/health/        # Health check endpoint
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── products/          # Products and impurity pages
│   └── services/          # Services page
├── components/            # React components
│   ├── ui/               # UI component library
│   ├── structure-visual.tsx  # Chemical structure panel
│   └── ...
├── lib/                  # Utility modules and product data
│   ├── config.ts         # Configuration management (reads env vars)
│   ├── email.ts          # Email utilities
│   └── *-data.ts         # Product / impurity data
├── public/               # Static assets (incl. structure images)
├── scripts/              # Docker/EC2 deployment scripts
├── apphosting.yaml       # Firebase App Hosting runtime + env config
├── firebase.json         # Firebase CLI deploy config
├── .firebaserc           # Firebase project alias (created during setup)
└── Dockerfile            # Docker configuration
```

## Deploying to Firebase App Hosting

### How it runs

| | |
|---|---|
| **Service** | [Firebase App Hosting](https://firebase.google.com/docs/app-hosting) — builds the Next.js app with Cloud Build and serves it from Cloud Run behind Firebase's CDN |
| **Why not static Firebase Hosting** | The contact form is a Next.js server action that calls Resend, and several product pages are server-rendered, so the app needs a Node.js runtime |
| **Backend ID** | `chemplus-pharma` (set in `firebase.json`) |
| **Deploy method** | Local source deploy via the Firebase CLI (`firebase deploy --only apphosting`), run from the unzipped project folder. App Hosting's automatic Git rollouts only support GitHub, so they aren't used |
| **Build** | Runs in Google Cloud Build: `pnpm install --frozen-lockfile` then `next build`. The package manager is detected from `pnpm-lock.yaml` |
| **Secrets** | None in Secret Manager. The Resend API key is set in `lib/config.ts` |
| **Billing** | The Firebase project must be on the **Blaze** (pay-as-you-go) plan |

### Configuration files

- **`apphosting.yaml`**: Cloud Run sizing (`cpu`, `memoryMiB`, `concurrency`, `minInstances`, `maxInstances`) and environment variables (`EMAIL_FROM`, `EMAIL_TO`).
- **`firebase.json`**: tells `firebase deploy` which backend to deploy to, which directory is the app root, and which paths to leave out of the source upload.
- **`.firebaserc`**: maps the `default` alias to the Firebase project ID. It is created by `firebase use --add`; keep it in the project folder so later deploys go to the same project.

### One-time setup

Someone with **Owner** (or Firebase Admin) on the Google Cloud project does these steps once per environment.

1. **Install the Firebase CLI** (v14.4 or later is needed for local-source App Hosting deploys):
   ```bash
   brew install firebase-cli        # macOS
   # or: npm install -g firebase-tools
   firebase --version
   ```

2. **Log in and select the project:**
   ```bash
   firebase login
   firebase projects:list
   firebase use --add               # pick the project, alias it "default"; this writes .firebaserc
   ```
   Upgrade the project to the Blaze plan in the Firebase console first if it isn't already.

3. **Create the App Hosting backend:**
   ```bash
   firebase apphosting:backends:create --backend chemplus-pharma --primary-region us-central1
   ```
   - The region **cannot be changed later**; pick it deliberately. Run `firebase apphosting:backends:create --help` for the regions available to your project; choose one close to the site's users.
   - When asked to connect a GitHub repository, skip it. This repo deploys from local source.

4. **Deploy for the first time** (see below), then check the site with the [health check](#health-check-and-verification).

### Deploying

From the project folder (the unzipped archive):
```bash
pnpm install                         # only needed for the pnpm script; or run the firebase command directly
pnpm deploy:firebase                 # = firebase deploy --only apphosting
```

The CLI uploads the source (minus the `ignore` paths in `firebase.json`), triggers a Cloud Build, and rolls out a new revision when the build succeeds. The live URL is printed at the end and is also shown in **Firebase console → App Hosting → chemplus-pharma**.

> The CLI uploads the folder as it is on disk. To release a new version, replace the folder with the new archive (keeping `.firebaserc`) and deploy again.

### Environment variables

| Variable | Source on Firebase | Where to change it |
|----------|--------------------|--------------------|
| Resend API key | Hardcoded in `lib/config.ts` (`resendApiKey`) | Edit `lib/config.ts`, redeploy |
| `EMAIL_FROM` | Inline value in `apphosting.yaml` | Edit `apphosting.yaml`, redeploy |
| `EMAIL_TO` | Inline value in `apphosting.yaml` | Edit `apphosting.yaml`, redeploy |
| `NEXT_TELEMETRY_DISABLED` | Inline value in `apphosting.yaml` | — |

> **Security note:** the Resend API key is in the source code, so anyone with this archive can send email from the account. Share the archive only with people who deploy the site, and replace the key in `lib/config.ts` if the archive is ever shared more widely.

### Scaling and cost

These settings are in `runConfig` in `apphosting.yaml`:

| Setting | Current | Notes |
|---------|---------|-------|
| `minInstances` | `0` | Scales to zero when idle (cheapest). The first request after idle has a cold start of a few seconds. Set to `1` for consistently fast responses, at the cost of an always-on instance. |
| `maxInstances` | `4` | Upper bound on cost and on concurrent capacity. |
| `concurrency` | `80` | Requests handled per instance. |
| `cpu` / `memoryMiB` | `1` / `512` | Enough for this site; raise memory if the logs show OOM restarts. |

### Custom domain

Firebase console → **App Hosting → chemplus-pharma → Settings → Domains → Add custom domain**. Add the DNS records it lists at your DNS provider. The TLS certificate is provisioned automatically once DNS resolves, which can take up to 24 hours.

### Logs, monitoring and rollback

- **Build logs:** Firebase console → App Hosting → chemplus-pharma → **Rollouts** → select a rollout. The full Cloud Build log is linked there.
- **Runtime logs:** the backend's **Logs** tab in the Firebase console, or Google Cloud console → **Logging**, filtered to the Cloud Run service for the backend.
- **Rollback:** Firebase console → App Hosting → chemplus-pharma → **Rollouts**, pick a previous successful rollout and roll back to it. Alternatively, redeploy from the previous archive.

### Health check and verification

After each deploy:
```bash
curl -s https://<your-app-hosting-url>/api/health
# {"status":"ok","timestamp":"...","service":"chemplus-pharma"}
```
Then load `/`, `/products` and one impurity page (e.g. `/products/semaglutide/impurity-1`), and submit a test message on `/contact`.

### Troubleshooting

| Symptom | Likely cause / fix |
|---------|--------------------|
| `firebase deploy` says the backend doesn't exist | Wrong project selected. Run `firebase use` and check `.firebaserc`, or create the backend (step 3). |
| Build fails at `pnpm install` with a lockfile error | `pnpm-lock.yaml` is out of sync with `package.json`. Run `pnpm install` and deploy again. Keep `pnpm-workspace.yaml` in the folder, and don't add a `package-lock.json`. |
| Contact form fails to send | Check the runtime logs for the Resend error; confirm the key in `lib/config.ts` is valid. |
| Emails fail with a Resend domain error | `EMAIL_FROM` must use a domain verified in Resend (`onboarding@resend.dev` only works for testing). |
| Structure panel shows only the formula, not an image | The image file named in `lib/*-data.ts` (`structureImage`) isn't in `public/`. Filenames are case-sensitive in production. |
| Deploy blocked with a billing error | The project isn't on the Blaze plan. |

## Alternative: Docker / EC2

The repo still supports a self-hosted Docker deployment. It is not used for the Firebase deployment above.

1. **Build the Docker image**
   ```bash
   docker build -t chemplus-pharma:latest .
   ```

2. **Run the container**
   ```bash
   docker run -d \
     --name chemplus-pharma-app \
     -p 3000:3000 \
     --env-file .env.production \
     --restart unless-stopped \
     chemplus-pharma:latest
   ```

3. **Check logs**
   ```bash
   docker logs -f chemplus-pharma-app
   ```

For EC2, the helper scripts in `scripts/` (`deploy.sh`, `run-docker.sh`, `verify-deployment.sh`) wrap these steps.

Other useful commands:

- `docker stop chemplus-pharma-app` - Stop container
- `docker restart chemplus-pharma-app` - Restart container
- `docker ps` - View container status

### Manual Build

```bash
pnpm build
pnpm start
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `EMAIL_FROM` | Sender address (must be on a Resend-verified domain) | No (default: `onboarding@resend.dev`) |
| `EMAIL_TO` | Where contact form submissions are sent | No (default: `admin@chempluspharma.com`) |
| `PORT` | Server port (Docker / manual only; App Hosting sets it) | No (default: 3000) |

`NODE_ENV` is set automatically by `next build` / `next start`.

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm deploy:firebase` - Deploy to Firebase App Hosting
- `./scripts/deploy.sh` - Deploy with Docker on EC2

## Health Check

The application includes a health check endpoint:

```bash
curl http://localhost:3000/api/health
```

Returns:
```json
{
  "status": "ok",
  "timestamp": "2026-01-25T...",
  "service": "chemplus-pharma"
}
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Open a merge request

## License

Private - All rights reserved

## Support

For deployment issues, see [Troubleshooting](#troubleshooting), or check the logs:

- Firebase: Firebase console → App Hosting → chemplus-pharma → Logs
- Docker: `docker logs -f chemplus-pharma-app`
