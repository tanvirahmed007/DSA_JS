//Non-Linear Data Structure

// 1. Linked List

// এটি একটি ডেটা স্ট্রাকচার যেখানে প্রতিটি উপাদান (নোড) অন্য নোডের সাথে লিঙ্কযুক্ত থাকে। এটি একটি নোড ধারণ করে যা পরবর্তী নোডের ঠিকানা ধারণ করে।

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Creating linked list
const head = new Node(1);
const second = new Node(2);
head.next = second;


console.log(head.next);  // Output: Node { data: 2, next: null }

//---------------------------------------------------------------------------------------------
// 2. Tree

// এটি একটি হায়ারারকি ডেটা স্ট্রাকচার যা একটি রুট নোড থেকে শুরু হয় এবং একাধিক শাখা থাকতে পারে। প্রতিটি নোডে একাধিক শাখা থাকতে পারে।

class TreeNode {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

const root = new TreeNode(1);  // মূল নোড
root.left = new TreeNode(2);  // বাম শিশু
root.right = new TreeNode(3);  // ডান শিশু


console.log(root.right);  // Output: TreeNode { left: null, right: null, value: 3 }

//---------------------------------------------------------------------------------------------
// 3. Graph

// এটি একটি ডেটা স্ট্রাকচার যা একটি সেট এবং তার মধ্যে সংযোজিত উপাদানের সমষ্টি ধারণ করে। গ্রাফ একটি নোড সেট এবং একটি ইজ সেট থাকতে পারে। প্রতিটি নোড অন্য নোডের সাথে সংযুক্ত থাকতে পারে।

// নোড এবং তাদের মধ্যে সম্পর্ক (এজ) নিয়ে গঠিত। এটি সাইক্লিক বা অ্যাসাইক্লিক হতে পারে এবং ডিরেক্টেড বা আনডিরেক্টেড হতে পারে।


const graph = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A'],
    D: ['B']
};



