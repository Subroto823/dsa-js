class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

const printList = (list) => {
    let curr = list;
    let listValues = '';
    while(curr) {
        listValues += `${curr.val} `;
        curr = curr.next;
    }
    console.log(listValues);
}

const mergeTwoLists = (list1, list2) => {
    if(list1 === null) return list2;
    if(list2 === null) return list1;

    if(list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next)
        return list2;
    }
};

let listOne = new Node(1);
listOne.next = new Node(2);
listOne.next.next = new Node(4);

let listTwo = new Node(1);
listTwo.next = new Node(3);
listTwo.next.next = new Node(5);

printList(mergeTwoLists(listOne, listTwo));

listOne = new Node();
listTwo = new Node(0);

printList(mergeTwoLists(listOne, listTwo));

