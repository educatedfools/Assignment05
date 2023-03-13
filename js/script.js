window.addEventListener('load', () => {
    document.getElementById('empForm').addEventListener('submit', (e) => {
        let formKeyArr = ['ID', 'Name', 'Extension', 'Email', 'Department'];
        let currentInput = document.querySelectorAll('input');
        let selectVal = document.querySelectorAll('select');
        e.preventDefault();
        for(let i = 0; i < currentInput.length; i++){
            console.log(`${formKeyArr[i]}: ${currentInput[i].value}`);
        }
        console.log(`${formKeyArr[4]} ${selectVal[0].value}`);
    })
})