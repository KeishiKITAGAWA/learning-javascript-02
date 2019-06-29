// 元素記号

let periTab = "Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can";

let ans = [];

let one = [1, 5, 6, 7, 8, 9, 15, 16, 19];

let two = [2, 3, 4, 10, 11, 13, 14, 17, 18, 20];

let spliTab = periTab.split(' ');
// スペースで区切り、20個のStringを収納したArrayにする

for (let i = 0; i < spliTab.length ; i++) {
    ans[String(i + 1)] = spliTab[i].slice(0, 3);
}
// 各要素の先頭の3文字を切り取る

for (let i in one) {
    ans[one[i]] = ans[one[i]].slice(0, 1);
}
// oneに属している数字番目の文字の先頭だけを切り取る

ans[12] = ans[12].replace("i", "");
// 問題の不備？　欲しいのは Mi ではなく Mg なので Mg が出力されるようにする　最初に全て3文字切り取ったのはこれのため

for (let i in two) {
    ans[two[i]] = ans[two[i]].slice(0, 2);
} 
// twoに属している数字番目の単語は先頭から2文字切り取る

ans = ans.slice(1, 20);
// ans[0]がemptyなのでその後ろを切り取る

console.log(ans);

