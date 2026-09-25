const values = [ "150000", "3.75", "", "100k", null, undefined ];

console.log("========== KẾT QUẢ ÉP KIỂU ==========");

values.forEach((value, index) => {
    const numberResult = Number(value);
    const unaryResult = +value;

    console.log(`
Trường hợp ${index + 1}:
Giá trị ban đầu: ${value}
Number(value): ${numberResult} | Kiểu: ${typeof numberResult}
+value: ${unaryResult} | Kiểu: ${typeof unaryResult}
`);
});