const skills = [
{id: 1, skill: 'html', have: true},
{id: 2, skill: 'c++', have: false},
{id: 3, skill: 'java', have: true},
{id: 4, skill: 'R', have: false},
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function deleteOne(id) {
    skills.splice(id, 1);
}

function create(skill) {
    skills.push(skill);
}


function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }