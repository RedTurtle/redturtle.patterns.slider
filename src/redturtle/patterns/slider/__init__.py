# -*- coding: utf-8 -*-
"""Init and utils."""

from zope.i18nmessageid import MessageFactory
from logging import getLogger

PACKAGE_NAME='redturtle.patterns.slider'

logger = getLogger(PACKAGE_NAME)
_ = MessageFactory(PACKAGE_NAME)
