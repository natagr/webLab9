document.addEventListener('DOMContentLoaded', (event) => {
    class Refrigerator {
        constructor(color, brand, model, price) {
            this.color = color;
            this.brand = brand;
            this.model = model;
            this.price = price;
        }

        
        toHtml() {
            return `<tr>
                <td>${this.color}</td>
                <td>${this.brand}</td>
                <td>${this.model}</td>
                <td>${this.price}</td>
            </tr>`;
        }
    }

    class RefrigeratorManager {
        constructor() {
            this.refrigerators = [];
        }

        
        addRefrigerator(refrigerator) {
            this.refrigerators.push(refrigerator);
        }

        
        displayAll() {
            let html = "<table><tr><th>Колір</th><th>Марка</th><th>Модель</th><th>Ціна</th></tr>";
            this.refrigerators.forEach(refrigerator => {
                html += refrigerator.toHtml();
            });
            html += "</table>";
            document.getElementById('result4').innerHTML = html;
        }
    }
    
    const refrigeratorManager = new RefrigeratorManager();
    refrigeratorManager.addRefrigerator(new Refrigerator("Білий", "Samsung", "RB33J3200SA", 15000));
    refrigeratorManager.addRefrigerator(new Refrigerator("Сірий", "LG", "GA-B459CLWL", 17500));
    refrigeratorManager.addRefrigerator(new Refrigerator("Чорний", "Bosch", "KGN39VL45", 20000));
    refrigeratorManager.addRefrigerator(new Refrigerator("Червоний", "Indesit", "DF4180W", 12000));
    refrigeratorManager.addRefrigerator(new Refrigerator("Зелений", "Electrolux", "EN3487AOY", 21000));


    document.getElementById('showRefrigerators').addEventListener('click', () => {
        refrigeratorManager.displayAll();
    });
});
