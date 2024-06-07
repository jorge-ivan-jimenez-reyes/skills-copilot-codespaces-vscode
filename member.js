function skillsMember() {
    var member = document.getElementById('member');
    var memberSkills = document.getElementById('memberSkills');
    var memberSkillsText = document.getElementById('memberSkillsText');
    var memberSkillsList = document.getElementById('memberSkillsList');
    var memberSkillsListItems = document.getElementsByClassName('memberSkillsListItem');
    var memberSkillsListItemsText = document.getElementsByClassName('memberSkillsListItemText');
    var memberSkillsListItemsCheck = document.getElementsByClassName('memberSkillsListItemCheck');
    var memberSkillsListItemsCheckIcon = document.getElementsByClassName('memberSkillsListItemCheckIcon');

    member.onclick = function() {
        memberSkills.style.display = 'block';
        memberSkillsText.style.display = 'block';
        memberSkillsList.style.display = 'block';
    }

    for (var i = 0; i < memberSkillsListItems.length; i++) {
        memberSkillsListItems[i].onclick = function() {
            for (var j = 0; j < memberSkillsListItems.length; j++) {
                memberSkillsListItems[j].style.backgroundColor = 'transparent';
                memberSkillsListItemsText[j].style.color = '#000';
                memberSkillsListItemsCheck[j].style.display = 'none';
            }
            this.style.backgroundColor = '#f2f2f2';
            this.children[0].style.color = '#007bff';
            this.children[1].style.display = 'block';
        }
    }

    memberSkills.onclick = function() {
        memberSkills.style.display = 'none';
        memberSkillsText.style.display = 'none';
        memberSkillsList.style.display = 'none';
        for (var i = 0; i < memberSkillsListItems.length; i++) {
            memberSkillsListItems[i].style.backgroundColor = 'transparent';
            memberSkillsListItemsText[i].style.color = '#000';
            memberSkillsListItemsCheck[i].style.display = 'none';
        }
    }
}