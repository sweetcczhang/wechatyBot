# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

from wechaty.models import Chat

# Register your models here.

class ChatAdmin(admin.ModelAdmin):
    list_display = ('id', 'content', 'keyroom')

admin.site.register(Chat,ChatAdmin)
