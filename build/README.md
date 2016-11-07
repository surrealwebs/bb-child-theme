# SCSS Support for Beaver Builder child theme

This is a _very_ basic SCSS setup for use within a Beaver Builder child theme. Once you have things up and running you can use all you FE ninja skills.

## NOTE

Before you get started using SCSS be aware the full FE boilerplate (along with resets) **should not be used**, this is intended for use with custom CSS requirement within Beaver Builder based projects.

## Setup

Make sure you have the following files. This is the expecte build directory structure in your child theme:

`build/`
`|- tasks/`
`|--- scss.js`
`|- src/`
`|--- screen.scss`
`|- env-dist.js`
`|- gulpfile.js`
`|- package.json`


## Install

First, copy env-dist.js to env.js

Then run:

`$> npm install`

## Compile

`$> gulp`

## Include

Add the following to the FLChildTheme class

`static public function enqueueCustomStylesheets()`
`{`
`    wp_enqueue_style( 'theme_custom_scss', FL_CHILD_THEME_URL . '/assets/styles/screen.css' );`
`}`

Add the following to your functions.php file (or other setup method)

`add_action( 'wp_enqueue_scripts', 'FLChildTheme::enqueueCustomStylesheets' );`

## Output

By default, the compiled version of your css is put in

`child-theme/assets/src/scree.css`

