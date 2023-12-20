


document.addEventListener('DOMContentLoaded', function () {
    let submitBtn = document.getElementById('submit');

    submitBtn.addEventListener('click', function () {
        let numOfColumns = document.getElementById('columns').value;
        let numOfRows = document.getElementById('rows').value;
        let tableGenerator = document.getElementById('tableGen');

      

        let tbl = '<table>';

        for (let i = 1; i <= numOfRows; i++) {
            tbl += '<tr>';

            for (let j = 1; j <= numOfColumns; j++) {
                tbl += `<td> column ${j} row ${i}</td>`;
            }

            tbl += '</tr>';
        }
        tbl += '</table>';

        tableGenerator.innerHTML = tbl;
    });
});