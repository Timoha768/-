 document.getElementById('calculateBtn').addEventListener('click', function() {
            try {
                // Получаем значения из полей ввода
                const a = parseFloat(document.getElementById('aValue').value);
                const x = parseFloat(document.getElementById('xValue').value);
                
                // Проверка на ввод чисел
                if (isNaN(a) || isNaN(x)) {
                    throw new Error("Пожалуйста, введите корректные числовые значения для a и x");
                }
                
                let y, formula;
                
                // Выбираем формулу в зависимости от значения x
                if (x >= 2) {
                    formula = "y = a/(x² - 25) + √(a + x)";
                    // Проверка деления на ноль
                    if (Math.pow(x, 2) - 25 === 0) {
                        throw new Error("Ошибка: деление на ноль (x² - 25 = 0)");
                    }
                    // Проверка корня из отрицательного числа
                    if (a + x < 0) {
                        throw new Error("Ошибка: квадратный корень из отрицательного числа (a + x < 0)");
                    }
                    y = a / (Math.pow(x, 2) - 25) + Math.sqrt(a + x);
                } 
                else if (x >= 0 && x < 2) {
                    formula = "y = 2√a × (x/4)";
                    // Проверка корня из отрицательного числа
                    if (a < 0) {
                        throw new Error("Ошибка: квадратный корень из отрицательного числа (a < 0)");
                    }
                    y = 2 * Math.sqrt(a) * (x / 4);
                } 
                else if (x < 0) {
                    formula = "y = 0.3x";
                    y = 0.3 * x;
                }
                
                // Отображаем результаты
                document.getElementById('inputA').textContent = a;
                document.getElementById('inputX').textContent = x;
                document.getElementById('usedFormula').textContent = formula;
                document.getElementById('outputY').textContent = y.toFixed(4);
                document.getElementById('result').style.display = 'block';
                
            } catch (error) {
                // Выводим ошибку в диалоговое окно
                alert("Ошибка: " + error.message);
                document.getElementById('result').style.display = 'none';
            }
        });