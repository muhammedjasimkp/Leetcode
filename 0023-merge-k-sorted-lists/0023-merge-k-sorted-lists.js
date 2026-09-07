var mergeKLists = function(lists) {

    let narr = [];

    
    for (let list of lists) {

        let current = list;

        while (current !== null) {
            narr.push(current.val);
            current = current.next;
        }
    }

   
    narr.sort((a, b) => a - b);

    let d = new ListNode(0);
    let c = d;

    for (let num of narr) {
        c.next = new ListNode(num);
        c = c.next;
    }

    return d.next;
};