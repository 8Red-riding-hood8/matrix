let size_arr, i, j, arr = [], sum = 0;
do{
    size_arr = +prompt("Введіть розмір масиву", 3);
}while (size_arr < 1)

document.write("Згенерована функція<br/>");
for(i = 0; i < size_arr; i++){
    arr[i] = [];
    for(j = 0; j < size_arr; j++){
        arr[i][j] =  Math.round(Math.random() * 9);
        // console.log(arr[i][j]);
        document.write(arr[i][j] + " ");
    }
    document.write("<br/>");
}
document.write("<br/>");

sum = 0;
for(i = 0; i < size_arr; i++){
    for(j = 0; j < size_arr; j++){
        if(i == j){
            sum += arr[i][j];
            document.write('<span style="background-color: purple; color: white;">' + arr[i][j] + "</span> ");
            continue;
        }
        document.write(arr[i][j] + " ");
    }
    document.write("<br/>");
}
document.write(`Сума головної діагоналі: ${sum}<br/>`);
document.write("<br/>");

sum = 0;
for(i = size_arr - 1; 0 <= i; i--){
    for(j = 0; j <= size_arr - 1; j++){
        if(i == j){
            sum += arr[i][j];
            // console.log(arr[i][j]);
            document.write('<span style="background-color: purple; color: white;">' + arr[i][j] + "</span> ");
            continue;
        }
        document.write(arr[i][j] + " ");
    }
    document.write("<br/>");
}
document.write(`Сума побочної діагоналі: ${sum}<br/>`);
document.write("<br/>");


sum = 0;
for(i = 0; i < size_arr; i++){
    for(j = 0; j < size_arr; j++){
        if(i < j){
            sum += arr[i][j];
            document.write('<span style="background-color: purple; color: white;">' + arr[i][j] + "</span> ");
            continue;
        }
        document.write(arr[i][j] + " ");
    }
    document.write("<br/>");
}
document.write(`Сума половини матриці без головної діагоналі зверху зправа: ${sum}<br/>`);
document.write("<br/>");

sum = 0;
for(i = 0; i < size_arr; i++){
    for(j = 0; j < size_arr; j++){
        if(i <= j){
            sum += arr[i][j];
            document.write('<span style="background-color: purple; color: white;">' + arr[i][j] + "</span> ");
            continue;
        }
        document.write(arr[i][j] + " ");
    }
    document.write("<br/>");
}
document.write(`Сума половини матриці з головної діагоналі зверху зправа: ${sum}<br/>`);
document.write("<br/>");

sum = 0;
for(i = 0; i < size_arr; i++){
    for(j = 0; j < size_arr; j++){
        if(i > j){
            sum += arr[i][j];
            document.write('<span style="background-color: purple; color: white;">' + arr[i][j] + "</span> ");
            continue;
        }
        document.write(arr[i][j] + " ");
    }
    document.write("<br/>");
}
document.write(`Сума половини матриці без головної діагоналі знизу зліва: ${sum}<br/>`);
document.write("<br/>");


sum = 0;
for(i = 0; i < size_arr; i++){
    for(j = 0; j < size_arr; j++){
        if(i >= j){
            sum += arr[i][j];
            document.write('<span style="background-color: purple; color: white;">' + arr[i][j] + "</span> ");
            continue;
        }
        document.write(arr[i][j] + " ");
    }
    document.write("<br/>");
}
document.write(`Сума половини матриці з головною діагоналлю знизу зліва: ${sum}<br/>`);
document.write("<br/>");

sum = 0;
for(i = size_arr - 1; 0 <= i; i--){
    for(j = 0; j <= size_arr - 1; j++){
        if(i >= j){
            sum += arr[i][j];
            // console.log(arr[i][j]);
            document.write('<span style="background-color: purple; color: white;">' + arr[i][j] + "</span> ");
            continue;
        }
        document.write(arr[i][j] + " ");
    }
    document.write("<br/>");
}
document.write(`Сума половини матриці з побочною діагоналлю зверху зліва: ${sum}<br/>`);
document.write("<br/>");


sum = 0;
for(i = size_arr - 1; 0 <= i; i--){
    for(j = 0; j <= size_arr - 1; j++){
        if(i < j){
            sum += arr[i][j];
            // console.log(arr[i][j]);
            document.write('<span style="background-color: purple; color: white;">' + arr[i][j] + "</span> ");
            continue;
        }
        document.write(arr[i][j] + " ");
    }
    document.write("<br/>");
}
document.write(`Сума половини матриці без побічної діагоналі внизу зправа: ${sum}<br/>`);
document.write("<br/>");
let row_c;
do {
  row_c = +prompt("Введіть номер стовця, суму якого ви б хотіли отримати", 1);
}while((row_c < 1) || (row_c > size_arr))

sum = 0;
for(i = 0; i < size_arr; i++){
    for(j = 0; j < size_arr; j++){
        if(i == row_c - 1){
            sum += arr[i][j];
            document.write('<span style="background-color: purple; color: white;">' + arr[i][j] + "</span> ");
            continue;
        }
        document.write(arr[i][j] + " ");
    }
    document.write("<br/>");
}
document.write(`Сума строки с: ${sum}<br/>`);
document.write("<br/>");


do{
    col_k = +prompt("Введіть номер стовця, суму якого ви б хотіли отримати", arr.length - 1);
}while ((col_k < 1) || (col_k >= size_arr))
console.log(col_k);
sum = 0;
for(i = 0; i < size_arr; i++){
    for(j = 0; j < size_arr; j++){
        if(j == col_k - 1){
            sum += arr[i][j];
            document.write('<span style="background-color: purple; color: white;">' + arr[i][j] + "</span> ");
            continue;
        }
        document.write(arr[i][j] + " ");
    }
    document.write("<br/>");
}
document.write(`Сумма стовпця k: ${sum}<br/>`);
