# Corerd Website

Hosted by [GitHub Pages](https://pages.github.com/)
at [https://corerd.github.io/](https://corerd.github.io/)

**GitHub Pages** is a static site hosting service that takes the website
source files (that is HTML, CSS and JavaScript files) straight from
a repository on GitHub and publishes the website.

Optionally, **GitHub Pages** runs the files through a build process by means of
[Jekyll](https://jekyllrb.com/) static site generator.

**Corerd website** is built on templates processed by **Jekyll**.


## Publishing sources for GitHub Pages sites

The publishing source for **GitHub Pages** sites is the branch and folder
where the source files are stored.

**Corerd website** is published from the `docs` folder in the main branch.

The structure of `docs` folder must comply with **Jekyll** references.


### Jekyll Directory Structure
```
.
├── _data
├── _includes
├── _layouts
├── _sass
├── _site
├── assets
│   ├── css
│   ├── drop
│   ├── img
│   └── js
├── Gemfile
├── [...]      # .html or .md files with valid front matter
└── index.html # can also be an 'index.md' with valid front matter
```


# Build and test locally

If you want to build and test the site locally, you have to install
[Jekyll](https://jekyllrb.com/).

Required:
- Ruby version 2.4.0 or higher
- Gem Bundler
- GCC and Make


## Jekyll prerequisites on Linux
The following steps apply also on Windows WSL.

Look at [Install dependencies](https://jekyllrb.com/docs/installation/ubuntu).

Install Ruby and build tools:
```
sudo apt-get install ruby-full build-essential zlib1g-dev
```

Avoid installing RubyGems packages (called gems) as the root user.
Instead, set up a gem installation directory for your user account.
The following commands will add environment variables to your `~/.bashrc` file
to configure the gem installation path:
```
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

Install the bundler gem:
```
gem install bundler
```

## Install Jekyll (all platform)

Clone `corerd.github.io` repository in your working directory,
go to `docs` subdirectory and open **Gemfile** with a text editor.

You'll find two lines like the following, the first commented, the second not:
```
#gem "jekyll"
gem "github-pages"
```

To build and run the site locally, un-comment the first line and comment
the second like this:
```
gem "jekyll"
#gem "github-pages"
```

**Don't push the modified Gemfile to the GitHub Pages repository**,
but keep only a local copy of it (see below).

Finally, run:
```
bundle install
```
The above steps are required only once.


## Build the site

Change to `docs` directory and run:
```
bundle exec jekyll serve
```
Your site will be also available on a local server at the address
[http://localhost:4000](http://localhost:4000)


## Untrack Gemfile in local repository but keep at origin

**Gemfile** manages the site building and running.

When you clone the repo, **Gemfile** is made to use **GitHub Pages** to build
and run the website.

If you want to build and test the site locally by means of **Jekyll**,
you have to update **Gemfile** content according to the above instructions.

To let **GitHub Pages** continue to serve your website,
**don't push your local Gemfile changes to the central origin repository**.

The safe way is to untrack **Gemfile** in your local repository. First of all,
check that .gitignore contains the following line (otherwise add it):
```
Gemfile*
```

Now open a terminal and move to the directory containing **Gemfile**,
then run the following command:
```
git update-index --assume-unchanged Gemfile
```

The above steps are required only once, after you cloned the repo.
Now you can update **Gemfile** to build and run your site locally,
and git will assume it has not been changed, so you won’t commit anything.

You can start track **Gemfile** again at any time, entering the command:
```
git update-index --no-assume-unchanged Gemfile
```


# Credits

This site would not have been possible without the help of the free services
listed below.

[Font Awesome](https://fontawesome.com/) provides vector icons and logos.

[GitHub Pages](https://pages.github.com/) is the host.

[Google Fonts](https://fonts.google.com/) provides more text fonts.

[Jekyll](https://jekyllrb.com/) is the static site generator engine.

[Liquid](https://shopify.github.io/liquid/) used by Jekyll as template language.

[unDraw](https://undraw.co/) provides vector images.

[W3Schools](https://www.w3schools.com/w3css/default.asp) provides the
**W3.CSS** framework.

I'm not affiliated, associated, authorized, endorsed by, or in any way
officially connected with any of the companies, organizations and individuals
mentioned above.


# License

The code and styles are licensed under the MIT license, meaning that you can do
almost everything. [See project license](LICENSE).

Obviously, you can be inspired but should not use the content of this repo
in your own site. :wink:
