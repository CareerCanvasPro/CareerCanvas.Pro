# CareerCanvas Naming Conventions

## Domain Strategy

### Primary Domains

- **careercanvas.pro** - Main product platform
- **api.careercanvas.pro** - API Gateway
- **docs.careercanvas.pro** - Documentation Hub
- **status.careercanvas.pro** - Service Status Page

### Product Subdomains

- **app.careercanvas.pro** - Main Web Application
- **admin.careercanvas.pro** - Admin Dashboard
- **analytics.careercanvas.pro** - Analytics Platform

### Service Subdomains

- **auth.careercanvas.pro** - Authentication Service
- **cdn.careercanvas.pro** - Content Delivery
- **ws.careercanvas.pro** - WebSocket Service

## Product Names

### Core Products

- **CareerCanvas Platform** - Main SaaS platform
- **CareerCanvas Pro** - Premium tier
- **CareerCanvas Enterprise** - Enterprise solution

### Product Lines

- **CareerCanvas.{ProductLine}.{Product}**
  Examples:
  - CareerCanvas.Learn.Courses
  - CareerCanvas.Network.Community
  - CareerCanvas.Tools.ResumeBuilder

### Services

- **CareerCanvas.Services.{Category}.{Service}**
  Examples:
  - CareerCanvas.Services.Auth.OAuth
  - CareerCanvas.Services.AI.ResumeAnalyzer
  - CareerCanvas.Services.Data.Analytics

## Code Conventions

### Repository Names

- All repositories should be prefixed with `CareerCanvas.`
- Use PascalCase for repository names
- Examples:
  - `CareerCanvas.Pro` - Main platform
  - `CareerCanvas.Api` - Backend API
  - `CareerCanvas.Mobile` - Flutter mobile app
  - `CareerCanvas.Mobile.Web` - Flutter web app

### Mobile App Specific Conventions

- **Flutter/Dart:**
  - snake_case for file names: `user_profile_screen.dart`
  - PascalCase for classes and widgets: `UserProfileScreen`
  - camelCase for methods and variables: `getUserData()`
  - UPPER_SNAKE_CASE for constants: `MAX_RETRY_ATTEMPTS`
- **Asset Names:**

  - snake_case for all assets: `profile_avatar.png`
  - Prefixes for asset types:
    - `ic_` for icons: `ic_home.svg`
    - `img_` for images: `img_onboarding.png`
    - `bg_` for backgrounds: `bg_splash.png`

- **Package Names:**
  - Use reverse domain notation
  - Example: `pro.careercanvas.mobile`
  - Test package: `pro.careercanvas.mobile.test`

### Branch Names

- `main` - Main development branch
- `feature/*` - Feature branches
- `bugfix/*` - Bug fix branches
- `release/*` - Release branches
- `hotfix/*` - Hot fix branches

### Commit Messages

- Use conventional commits format:
  - `feat:` - New features
  - `fix:` - Bug fixes
  - `docs:` - Documentation changes
  - `style:` - Code style changes
  - `refactor:` - Code refactoring
  - `test:` - Test updates
  - `chore:` - Maintenance tasks

### Code Style

- **TypeScript/JavaScript:**

  - PascalCase for component names: `UserProfile.tsx`
  - camelCase for functions and variables: `getUserData()`
  - UPPER_SNAKE_CASE for constants: `MAX_RETRY_ATTEMPTS`

- **CSS/SCSS:**
  - kebab-case for class names: `user-profile-container`
  - BEM methodology: `block__element--modifier`

### API Endpoints

- Use kebab-case for URLs
- Prefix with API version
- Examples:
  - `/api/v1/user-profiles`
  - `/api/v1/career-paths`
  - `/api/v1/job-matches`

### Database

- Tables: PascalCase, plural
  - `Users`
  - `CareerPaths`
  - `JobListings`
- Columns: camelCase
  - `userId`
  - `firstName`
  - `lastLoginDate`

### Environment Variables

- UPPER_SNAKE_CASE
- Prefix with `CAREERCANVAS_`
- Examples:
  - `CAREERCANVAS_API_KEY`
  - `CAREERCANVAS_DATABASE_URL`
  - `CAREERCANVAS_ENVIRONMENT`
