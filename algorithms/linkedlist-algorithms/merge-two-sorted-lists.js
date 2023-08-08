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

// list1 : 1 -> 2 -> 4
let node1 = new ListNode(1),
    node2 = new ListNode(2),
    node3 = new ListNode(4);

const list1 = node1
node1.next = node2
node2.next = node3

// list2 : 1 -> 3 -> 5
let node4 = new ListNode(1),
    node5 = new ListNode(3),
    node6 = new ListNode(5);

const list2 = node4
node4.next = node5
node5.next = node6

printList(mergeTwoLists(list1, list2));

