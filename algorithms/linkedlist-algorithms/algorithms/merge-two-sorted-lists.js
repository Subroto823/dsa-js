const { ListNode } = require("../list-node");
const { LinkedList } = require("../linkedlist");

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


const list1 = new LinkedList();
list1.append(1, 2, 4);

const list2 = new LinkedList();
list2.append(1, 3, 5);

LinkedList.printList(mergeTwoLists(list1.head, list2.head));

