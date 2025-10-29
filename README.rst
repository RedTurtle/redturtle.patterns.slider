.. This README is meant for consumption by humans and pypi. Pypi can render rst files so please do not use Sphinx features.
   If you want to learn more about writing documentation, please check out: http://docs.plone.org/about/documentation_styleguide.html
   This text does not appear on pypi or github. It is a comment.

==============================================================================
redturtle.patterns.slider
==============================================================================

A pattern based on Plone Mockup that enable a slick slider on a selected div.

http://kenwheeler.github.io/slick/

Documentation
-------------


Installation
------------

Install redturtle.patterns.slider by adding it to your buildout::

    [buildout]

    ...

    eggs =
        redturtle.patterns.slider


and then running ``bin/buildout``

After that, you need to install it in your Plone site from the control panel.

Pattern usage
-------------

This pattern follows slick's standards, so you need a div with a list of items.

To enable the pattern in a div, you just need to add 'pat-slider' class to it:

.. code::

  <div class="pat-slider">
  ...
  </div>

There is a set of default parameters for the slider:

- dots: true
- slidesToShow: 4
- slidesToScroll: 4
- arrows: true
- lazyLoad: 'ondemand'

If you want to change something, you only need to add an additional configuration (mockup-style) to your div like this:

.. code::

  <div class="pat-slider"
       data-pat-slider="dots: false; arrows: false">
  ...
  </div>

JS Development and bundling
---------------------------

If you need to develop this product's javascripts or styles, you need to compile the code
for the resource registry bundle.

First of all, you need to install dependencies listed in package.json file in the root of this package:

.. code::

  npm install


After that, you can use two different scripts::

- `npm run watch`: the default task, that listen files changes with `watch` and re-build resources and bundles automatically
- `npm run compile`: to manually compile all resources and bundles


Contribute
----------

- Issue Tracker: https://github.com/RedTurtle/redturtle.patterns.slider/issues
- Source Code: https://github.com/RedTurtle/redturtle.patterns.slider


License
-------

The project is licensed under the GPLv2.
