const skills = [
{id: 1, skill: 'html', have: true},
{id: 1, skill: 'c++', have: false},
{id: 1, skill: 'java', have: true},
{id: 1, skill: 'R', have: false},
];

module.exports = {
    getAll,
    getOne

};


function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }