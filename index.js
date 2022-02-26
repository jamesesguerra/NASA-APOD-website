
const displayAPOD = ({ date, explanation, url, title }) => {
    document.querySelector('.replaced-content').style.display = 'block';
    document.body.removeChild(document.querySelector('.main-content'));
    document.querySelector('.date').textContent = date;
    document.querySelector('.title').textContent = title;
    document.querySelector('.explanation').textContent = explanation;
    const picture = document.createElement('div');
    picture.classList.add('picture');
    picture.style.backgroundImage = `url(${url})`;
    document.querySelector('.replaced-content').appendChild(picture);
}

const fetchPicture = dateString => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=ltgsALZd0mmECL2lRLwJmNWSfl6V2smPdYL8rNJb&date=${dateString}`)
    .then(response => response.json())
    .then(data => {
        displayAPOD(data);
        console.log(data);
    });
}

const input = document.querySelector('input');
input.value = '2000-01-01'
const generateBtn = document.querySelector('.generate-btn');
generateBtn.addEventListener('click', e => {
    e.preventDefault();
    fetchPicture(input.value);
})