
# SchoolRider WordPress Theme & Plugin

A comprehensive WordPress solution for safe and efficient school dismissal processes.

**Author**: Solomon Anim (Solan)
**Website**: [solangigs.com](https://solangigs.com)

## Features

- **Multi-user System**: Separate dashboards for parents, school staff, and riders
- **QR Code Integration**: Streamlines student pickup and verification
- **Real-time Updates**: Keep all parties informed about dismissal status
- **Enhanced Security**: Digital verification system for student safety
- **Efficient Operations**: Reduce wait times and streamline pickup operations

## Project info

**URL**: https://lovable.dev/projects/0ccb7893-f0e9-4e4b-8446-fe078b68fa5e

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/0ccb7893-f0e9-4e4b-8446-fe078b68fa5e) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## Converting to WordPress

To convert this React application to a WordPress theme and plugin:

### Theme Conversion

1. Create a WordPress theme directory structure with required files:
   - `style.css` (with theme information)
   - `functions.php`
   - `index.php`
   - Other template files (header.php, footer.php, etc.)

2. Build the React application:
   ```
   npm run build
   ```

3. Integrate the built files with WordPress:
   - Enqueue scripts and styles in `functions.php`
   - Create template files that load the React application

### Plugin Conversion

1. Create a WordPress plugin directory structure:
   - Main plugin PHP file with plugin information
   - Include necessary admin pages and functionality
   - Add necessary hooks and filters

2. Convert React components to PHP/WordPress:
   - User roles and capabilities
   - Database interactions
   - Admin UI

3. Ensure compatibility with Elementor:
   - Create custom Elementor widgets
   - Add necessary hooks for Elementor integration

## Elementor Compatibility

SchoolRider theme is designed to work seamlessly with Elementor:

- Custom widgets for dismissal management
- Styled elements matching the SchoolRider aesthetic
- Compatible templates and sections

## Technical Requirements

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## WordPress Requirements

- WordPress 5.9+
- PHP 7.4+
- MySQL 5.7+ or MariaDB 10.3+
- Elementor 3.5+

## License

All rights reserved. Contact the author for licensing information.
