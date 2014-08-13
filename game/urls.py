from django.conf.urls import patterns, url
from views import WorkspaceViewList, WorkspaceViewDetail
from django.views.generic.base import TemplateView

urlpatterns = patterns('',
    url(r'^$', 'game.views.levels'),
    url(r'^submit$', 'game.views.submit'),
    url(r'^(?P<level>[0-9]+)$', 'game.views.level'),
    url(r'^episode/(?P<episode>[0-9]+)$', 'game.views.start_episode'),
    url(r'^levels/random/([0-9]+)$', 'game.views.random_level_for_episode'),
    url(r'^settings$', 'game.views.settings'),
    url(r'^logged_students$', 'game.views.logged_students'),
    url(r'^scoreboard$', 'game.views.scoreboard'),
    url(r'^workspace$', WorkspaceViewList.as_view()),
    url(r'^workspace/(?P<pk>[0-9]+)$', WorkspaceViewDetail.as_view()),
    url(r'^credits$', TemplateView.as_view(template_name='game/credits.html')),

    url(r'^level_editor$', 'game.views.level_editor'),
    url(r'^level_editor/level/get_all$', 'game.views.get_list_of_levels_for_editor'),
    url(r'^level_editor/level/get/(?P<levelID>[0-9]+)$', 'game.views.get_level_for_editor'),
    url(r'^level_editor/level/delete/(?P<levelID>[0-9]+)$', 'game.views.delete_level_for_editor'),
    url(r'^level_editor/level/save$', 'game.views.save_level_for_editor'),
    url(r'^level_editor/level/random', 'game.views.generate_random_map_for_editor'),
)