'use strict'

// Vendor scripts
import 'particles.js'
import Handlebars from 'handlebars/dist/handlebars.js'
import $ from 'jquery'

import UIkit from 'uikit'
import icons from 'uikit/dist/js/uikit-icons.js'

// Vendor styles
import 'uikit/dist/css/uikit.min.css'

// Assets
import particleConfig from './assets/particles.json'
import bitmoji from './assets/images/bitmoji-gliding.png'

UIkit.use(icons)
particlesJS('particlesjs', particleConfig)

// Get template definition
const source = $('#template').html()

// Bind template source to Handlebars
const template = Handlebars.compile(source)

const links = {
  linkedIn: '//www.linkedin.com/in/philfevry',
  github: `//www.github.com/phlfvry`
}

// Compile template with these variables
const html = template({
  bitmoji: bitmoji,
  header: `hi, i'm phil...`,
  body: `i'm currently in the process of redesigning my website. in the meantime, 
  you can <a href="mailto:pf@phlfvry.com">message me directly</a> for a 
  portfolio presentation.`,
  links: {
    linkedIn: '//www.linkedin.com/in/philfevry',
    github: `//www.github.com/phlfvry`
  }
})

// Render compiled template to target
$('#pf').html(html)