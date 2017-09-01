/*
Code for Life

Copyright (C) 2017, Ocado Innovation Limited

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

ADDITIONAL TERMS – Section 7 GNU General Public Licence

This licence does not grant any right, title or interest in any “Ocado” logos,
trade names or the trademark “Ocado” or any other trademarks or domain names
owned by Ocado Innovation Limited or the Ocado group of companies or any other
distinctive brand features of “Ocado” as may be secured from time to time. You
must not distribute any modification of this program using the trademark
“Ocado” or claim any affiliation or association with Ocado or its employees.

You are not authorised to use the name Ocado (or any of its trade names) or
the names of any author or contributor in advertising or for publicity purposes
pertaining to the distribution of this program, without the prior written
authorisation of Ocado.

Any propagation, distribution or conveyance of this program must include this
copyright notice and these terms. You must not misrepresent the origins of this
program; modified versions of the program must be marked as such and not
identified as the original program.
*/

/* global post */
/* global openConfirmationBox */

var CONFIRMATION_DATA = {};

$(function() {
    setUpClassesMasterCheckbox('#selectedClassesListToggle', '.classes', 'master_checkbox--selected',
        'checkbox_list--item_selected');
    setUpEpisodesMasterCheckbox('#selectedLevelsListToggle', 'episodes', 'levels', 'master_checkbox--selected',
        'sub_master_checkbox--selected', 'checkbox_list--item_selected');
    setUpSubMasterCheckboxList('.episodes');
    setUpCheckboxList('classes');
    setUpCheckboxList('levels');
});

function setUpClassesMasterCheckbox(masterCheckboxID, classBoxesClass, masterCheckboxBackground, classBoxesBackground) {
    $(masterCheckboxID).click(function() {
        var classBoxes = $(classBoxesClass);
        var selectedClassBoxes = [];
        for (var i = 0; i < classBoxes.length; i++) {
            if (classBoxes[i].checked) {
                selectedClassBoxes.push(classBoxes[i].name);
            }
        }
        if (selectedClassBoxes.length < classBoxes.length) {
            for (var j = 0; j < classBoxes.length; j++) {
                classBoxes[j].checked = true;
                var uncheckedBoxID = '#'+classBoxes[j].id;
                if(!$(uncheckedBoxID).parent().parent().parent().hasClass(classBoxesBackground)) {
                    $(uncheckedBoxID).parent().parent().parent().addClass(classBoxesBackground);
                }
            }
            $(masterCheckboxID)[0].checked = true;
            if(!$(masterCheckboxID).parent().hasClass(masterCheckboxBackground)) {
                $(masterCheckboxID).parent().addClass(masterCheckboxBackground);
            }
        }
        else {
            for (var k = 0; k < classBoxes.length; k++) {
                classBoxes[k].checked = false;
                var checkedBoxID = '#'+classBoxes[k].id;
                if($(checkedBoxID).parent().parent().parent().hasClass(classBoxesBackground)) {
                    $(checkedBoxID).parent().parent().parent().removeClass(classBoxesBackground);
                }
            }
            $(masterCheckboxID)[0].checked = false;
            if($(masterCheckboxID).parent().hasClass(masterCheckboxBackground)) {
                $(masterCheckboxID).parent().removeClass(masterCheckboxBackground);
            }
        }
    });
}

function setUpEpisodesMasterCheckbox(masterCheckboxID, episodeBoxesName, levelBoxesName, masterCheckboxBackground,
                                     episodeBoxesBackground, levelBoxesBackground) {
    $(masterCheckboxID).click(function() {
        var episodeBoxes = document.getElementsByName(episodeBoxesName);
        var selectedBoxes = [];
        for (var i = 0; i < episodeBoxes.length; i++) {
            if (episodeBoxes[i].checked) {
                selectedBoxes.push(episodeBoxes[i].name);
            }
        }
        var levelBoxes = document.getElementsByName(levelBoxesName);
        for (var j = 0; j < levelBoxes.length; j++) {
            if (levelBoxes[j].checked) {
                selectedBoxes.push(levelBoxes[j].name);
            }
        }
        if (selectedBoxes.length < episodeBoxes.length + levelBoxes.length) {
            for (var k = 0; k < episodeBoxes.length; k++) {
                episodeBoxes[k].checked = true;
                var uncheckedEpisodeBoxID = '#'+episodeBoxes[k].id;
                if(!$(uncheckedEpisodeBoxID).parent().parent().parent().hasClass(episodeBoxesBackground)) {
                    $(uncheckedEpisodeBoxID).parent().parent().parent().addClass(episodeBoxesBackground);
                }
            }
            for (var l = 0; l < levelBoxes.length; l++) {
                levelBoxes[l].checked = true;
                var uncheckedLevelBoxID = '#'+levelBoxes[l].id;
                if(!$(uncheckedLevelBoxID).parent().parent().parent().hasClass(levelBoxesBackground)) {
                    $(uncheckedLevelBoxID).parent().parent().parent().addClass(levelBoxesBackground);
                }
            }
            $(masterCheckboxID)[0].checked = true;
            if(!$(masterCheckboxID).parent().hasClass(masterCheckboxBackground)) {
                $(masterCheckboxID).parent().addClass(masterCheckboxBackground);
            }
        }
        else {
            for (var m = 0; m < episodeBoxes.length; m++) {
                episodeBoxes[m].checked = false;
                var checkedEpisodeBoxID = '#'+episodeBoxes[m].id;
                if($(checkedEpisodeBoxID).parent().parent().parent().hasClass(episodeBoxesBackground)) {
                    $(checkedEpisodeBoxID).parent().parent().parent().removeClass(episodeBoxesBackground);
                }
            }
            for (var n = 0; n < levelBoxes.length; n++) {
                levelBoxes[n].checked = false;
                var checkedLevelsBoxID = '#'+levelBoxes[n].id;
                if($(checkedLevelsBoxID).parent().parent().parent().hasClass(levelBoxesBackground)) {
                    $(checkedLevelsBoxID).parent().parent().parent().removeClass(levelBoxesBackground);
                }
            }
            $(masterCheckboxID)[0].checked = false;
            if($(masterCheckboxID).parent().hasClass(masterCheckboxBackground)) {
                $(masterCheckboxID).parent().removeClass(masterCheckboxBackground);
            }
        }
    });
}

function setUpLevelsMasterCheckbox(masterCheckboxID, levelBoxesClass, masterCheckboxBackground, levelBoxesBackground) {
    $(masterCheckboxID).click(function() {
        var levelBoxes = $(levelBoxesClass);
        var selectedLevelBoxes = [];
        for (var i = 0; i < levelBoxes.length; i++) {
            if (levelBoxes[i].checked) {
                selectedLevelBoxes.push(levelBoxes[i].name);
            }
        }
        if (selectedLevelBoxes.length < levelBoxes.length) {
            for (var j = 0; j < levelBoxes.length; j++) {
                levelBoxes[j].checked = true;
                var uncheckedBoxID = '#'+levelBoxes[j].id;
                if(!$(uncheckedBoxID).parent().parent().parent().hasClass(levelBoxesBackground)) {
                    $(uncheckedBoxID).parent().parent().parent().addClass(levelBoxesBackground);
                }
            }
            $(masterCheckboxID)[0].checked = true;
            if(!$(masterCheckboxID).parent().parent().parent().hasClass(masterCheckboxBackground)) {
                $(masterCheckboxID).parent().parent().parent().addClass(masterCheckboxBackground);
            }
        }
        else {
            for (var k = 0; k < levelBoxes.length; k++) {
                levelBoxes[k].checked = false;
                var checkedBoxID = '#'+levelBoxes[k].id;
                if($(checkedBoxID).parent().parent().parent().hasClass(levelBoxesBackground)) {
                    $(checkedBoxID).parent().parent().parent().removeClass(levelBoxesBackground);
                }
            }
            $(masterCheckboxID)[0].checked = false;
            if($(masterCheckboxID).parent().parent().parent().hasClass(masterCheckboxBackground)) {
                $(masterCheckboxID).parent().parent().parent().removeClass(masterCheckboxBackground);
            }
        }
    });
}

function setUpSubMasterCheckboxList(boxesClass) {
    var boxes = $(boxesClass);
    for (var i = 0; i < boxes.length; i++) {
        var episodeNumber = i+1;
        var levelsName = '.levels_'+episodeNumber;
        setUpLevelsMasterCheckbox('#'+boxes[i].id, levelsName, 'sub_master_checkbox--selected',
            'checkbox_list--item_selected');
    }
}

function setUpCheckboxList(boxesName) {
    var boxes = document.getElementsByName(boxesName);
    for (var i = 0; i < boxes.length; i++) {
        setUpCheckbox('#'+boxes[i].id);
    }
}

function setUpCheckbox(boxID) {
    $(boxID).click(function() {
        if(!$(boxID).parent().parent().parent().hasClass('checkbox_list--item_selected')) {
            $(boxID).parent().parent().parent().addClass('checkbox_list--item_selected');
        }
        else {
            $(boxID).parent().parent().parent().removeClass('checkbox_list--item_selected');
        }
    });
}
