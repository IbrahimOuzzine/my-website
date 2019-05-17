
var allCheckboxes = document.querySelectorAll('input[type=checkbox]');
var allPlayers = Array.from(document.querySelectorAll('.product'));
var checked = {};

getChecked('merk');
getChecked('kleur');
getChecked('formaat');
getChecked('nbaTeam');
getChecked('conference');


Array.prototype.forEach.call(allCheckboxes, function (el) {
  el.addEventListener('change', toggleCheckbox);
});

function toggleCheckbox(e) {
  getChecked(e.target.name);
  setVisibility();
}

function getChecked(name) {
  checked[name] = Array.from(document.querySelectorAll('input[name=' + name + ']:checked')).map(function (el) {
    return el.value;
  });
}

function setVisibility() {
  allPlayers.map(function (el) {
    var merk = checked.merk.length ? _.intersection(Array.from(el.classList), checked.merk).length : true;
    var kleur = checked.kleur.length ? _.intersection(Array.from(el.classList), checked.kleur).length : true;
    var formaat = checked.formaat.length ? _.intersection(Array.from(el.classList), checked.formaat).length : true;
    var nbaTeam = checked.nbaTeam.length ? _.intersection(Array.from(el.classList), checked.nbaTeam).length : true;
    var conference = checked.conference.length ? _.intersection(Array.from(el.classList), checked.conference).length : true;
    
    if (merk && kleur && formaat && nbaTeam && conference) {
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
    }
  });
}



