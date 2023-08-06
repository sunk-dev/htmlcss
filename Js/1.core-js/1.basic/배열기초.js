// array ������ �ִ� ���� �ڷ���
// �迭 ����
let numbers=[1,2,3,4,5]
console.log(typeof numbers); //Object��:���������δ�  array���� ũ�Դ� ���� ��ü(Object)�� ���� �ִ�.


// �迭��� ����
console.log(numbers[3]);
// �迭 ���� ���
console.log(numbers.length);
//�迭�� ù��°
console.log(numbers[0]);
// �迭�� ������ 
console.log(numbers[numbers.length-1]);

// �迭 ���(element) ����
numbers[0]=6;
console.log(numbers);

// ������ ���� ����(���� �ε��� ��ȣ�� �ƴҶ�)
numbers[5]=7;
console.log(numbers); //�迭�� �߰����� -> �����ϱ�

//�迭 ���� ������ ��ü ���� (��ȸ)
// 1
for (let i=0;i<numbers.length;i++){
    console.log(`numbers[${i}] ${numbers[i]}`);
}
// for of ��
for(let n of numbers){
    console.log(` ${n}`);

}
// ES6:��� �ڹٽ�ũ��Ʈ ����
// foreach ��� �� �ƴ϶� �ε�����ȣ�� ������ ����
numbers.forEach(n=> {
    console.log(`numbers in ${n}`);
});
numbers.forEach(n,inedex=> {
    console.log(`numbers[${inedex}] in ${n}`);
});