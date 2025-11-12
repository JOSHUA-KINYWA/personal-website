# Setup Instructions

## Profile Photo Setup

1. Save your profile photo as `profile-photo.jpg` in the `dev-engineer/public/` folder
2. The image should be square (recommended: 800x800px or larger)
3. Supported formats: JPG, PNG, WebP

## GitHub Integration Setup

To automatically fetch your GitHub projects:

1. Create a `.env.local` file in the `dev-engineer/` directory
2. Add your GitHub username:
   ```
   GITHUB_USERNAME=your-github-username
   NEXT_PUBLIC_GITHUB_USERNAME=your-github-username
   ```

3. The API will automatically fetch your 6 most recently updated repositories
4. If the API fails, it will show sample projects as fallback

## Manual Project Setup

If you prefer to manually add projects, edit `dev-engineer/app/components/Projects.tsx` and modify the fallback projects array.

## Running the Development Server

```bash
cd dev-engineer
npm run dev
```

Visit `http://localhost:3000` to see your portfolio.

