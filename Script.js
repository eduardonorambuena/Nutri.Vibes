document.addEventListener('DOMContentLoaded', function() {
    const agendarBtn = document.querySelector('.agendar-btn');
    const loginBtn = document.querySelector('.login-btn');
    const loginForm = document.getElementById('login-form');
    const fileInput = document.getElementById('file-input');
    const fileDisplay = document.getElementById('file-display');

    if (agendarBtn) {
        agendarBtn.addEventListener('click', function() {
            window.location.href = 'agendar.html';
        });
    }

    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            window.location.href = 'login.html';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            window.location.href = 'consulta.html';
        });
    }

    if (fileInput) {
        fileInput.addEventListener('change', function(event) {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = function(e) {
                const fileContent = e.target.result;
                const fileExtension = file.name.split('.').pop().toLowerCase();

                if (fileExtension === 'xlsx' || fileExtension === 'xls') {
                    // Mostrar contenido del archivo Excel
                    const workbook = XLSX.read(fileContent, {type: 'binary'});
                    const sheetName = workbook.SheetNames[0];
                    const sheet = workbook.Sheets[sheetName];
                    const html = XLSX.utils.sheet_to_html(sheet);
                    fileDisplay.innerHTML = html;
                } else if (fileExtension === 'doc' || fileExtension === 'docx') {
                    // Mostrar contenido del archivo Word
                    mammoth.convertToHtml({arrayBuffer: fileContent})
                        .then(function(result) {
                            fileDisplay.innerHTML = result.value;
                        })
                        .catch(function(err) {
                            console.error('Error al convertir el archivo Word:', err);
                        });
                } else {
                    fileDisplay.textContent = 'Formato de archivo no soportado.';
                }
            };

            if (fileExtension === 'doc' || fileExtension === 'docx') {
                reader.readAsArrayBuffer(file);
            } else {
                reader.readAsBinaryString(file);
            }
        });
    }
});
