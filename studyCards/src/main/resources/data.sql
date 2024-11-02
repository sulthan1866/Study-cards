ALTER TABLE cards DROP COLUMN id;

ALTER TABLE cards
ADD id INT AUTO_INCREMENT PRIMARY KEY;




INSERT INTO cards (id,genre, qtype, question, answer, correct_option, options) VALUES
(DEFAULT,'dsa', 'Arrays', 'Explain the difference between a static array and a dynamic array.', 'Static arrays have a fixed size determined at creation, while dynamic arrays can grow or shrink as needed.', 'Static arrays have a fixed size; dynamic arrays can resize.', ARRAY['Static arrays can resize, dynamic arrays have a fixed size.', 'Static arrays are stored in contiguous memory, dynamic arrays can be scattered.', 'Static arrays have a fixed size; dynamic arrays can resize.', 'Dynamic arrays are immutable, static arrays are mutable.']),
(DEFAULT,'dsa', 'Strings', 'What is the difference between mutable and immutable strings?', 'Mutable strings allow modifications after their creation, while immutable strings remain constant.', 'Mutable strings can be changed; immutable strings cannot.', ARRAY['Mutable strings cannot be changed; immutable strings can be changed.', 'Mutable strings are fixed size; immutable strings can vary in size.', 'Mutable strings can be changed; immutable strings cannot.', 'Mutable strings are stored in contiguous memory; immutable strings are not.']),
(DEFAULT,'dsa', 'Strings', 'Describe the concept of string interning.', 'String interning involves reusing immutable strings to optimize memory usage.', 'Reusing immutable strings to save memory.', ARRAY['Storing strings in separate memory locations to avoid duplication.', 'Reusing immutable strings to save memory.', 'Encoding strings for encryption.', 'Compressing strings to reduce size.']),
(DEFAULT,'dsa','Queues', 'What is a circular queue, and how does it differ from a regular queue?', 'A circular queue connects the end of the queue back to the front, allowing for efficient reuse of space. A regular queue does not have this feature and simply dequeues elements from the front and enqueues at the rear without wrapping.', 'Circular queue wraps around; regular queue does not.', ARRAY['Circular queue wraps around; regular queue does not.', 'Circular queue uses a priority-based ordering; regular queue follows FIFO.', 'Circular queue supports only one type of data; regular queue supports multiple data types.', 'Circular queue has a fixed size; regular queue can dynamically grow.']),
(DEFAULT,'dsa','Linked Lists', 'What is the primary advantage of using a linked list over an array?', 'Singly linked lists have a single pointer to the next node, while doubly linked lists have pointers to both the next and previous nodes.', 'Efficient insertion and deletion.', ARRAY['Faster access times for elements.', 'More memory usage for storing elements.', 'Efficient insertion and deletion.', 'Fixed size storage.']),
(DEFAULT,'dsa','Stacks', 'What is the stack data structure, and what are its main operations?', 'A stack is a Last-In-First-Out (LIFO) data structure with primary operations of pushing, popping, and peeking.', 'LIFO structure with operations: push, pop, peek.', ARRAY['LIFO structure with operations: push, pop, peek.', 'FIFO structure with operations: enqueue, dequeue, front.', 'A structure that supports random access with operations: add, remove.', 'A structure for priority management with operations: insert, delete.']),
(DEFAULT,'dsa', 'Stacks', 'Explain the concept of stack overflow and stack underflow.', 'Stack overflow occurs when a stack exceeds its allocated size, and underflow occurs when operations are attempted on an empty stack.', 'Overflow: Stack exceeds capacity; Underflow: Stack is empty.', ARRAY['Overflow: Stack is empty; Underflow: Stack exceeds capacity.', 'Overflow: Stack exceeds capacity; Underflow: Stack is empty.', 'Overflow: Stack has too many elements; Underflow: Stack has too few elements.', 'Overflow: Stack is full; Underflow: Stack is full.']),
(DEFAULT,'dsa', 'Arrays', 'What is the time complexity of accessing an element in an array?', 'The time complexity of accessing an element in an array is O(1), which means it is done in constant time. This is because arrays are stored in contiguous memory locations, and the index allows direct access.', 'O(1)', ARRAY['O(n)', 'O(log n)', 'O(1)', 'O(n^2)']),
(DEFAULT,'dsa', 'Linked Lists', 'What are the differences between singly linked lists and doubly linked lists?', 'Singly linked lists have a single pointer to the next node, while doubly linked lists have pointers to both the next and previous nodes.', 'Singly linked lists have one pointer per node; doubly linked lists have two.', ARRAY['Singly linked lists have two pointers per node; doubly linked lists have one.', 'Singly linked lists have one pointer per node; doubly linked lists have two.', 'Singly linked lists are faster for insertion; doubly linked lists are slower.', 'Singly linked lists are static; doubly linked lists are dynamic.']),
(DEFAULT,'dsa', 'Queues', 'Describe the difference between a priority queue and a regular queue.', 'In a priority queue, elements are dequeued based on their priority rather than the order they were enqueued. In contrast, a regular queue follows the FIFO (First In, First Out) principle.', 'Priority queue sorts elements by priority; regular queue follows FIFO.', ARRAY['Priority queue sorts elements by priority; regular queue follows FIFO.', 'Priority queue uses a circular structure; regular queue does not.', 'Priority queue supports multiple priorities; regular queue supports single priority.', 'Priority queue is always empty; regular queue is never empty.']),
(DEFAULT,'dsa', 'Trees', 'What are the characteristics of a binary search tree (BST)?', 'In a binary search tree, for any given node, the value of the left child is less than the node’s value, and the value of the right child is greater than the node’s value.', 'Left child < Node < Right child.', ARRAY['Left child = Node > Right child.', 'Left child > Node < Right child.', 'Left child < Node < Right child.', 'Left child < Node = Right child.']),
(DEFAULT,'dsa', 'Trees', 'Explain what is meant by a balanced binary tree.', 'A balanced binary tree ensures that the difference in height between the left and right subtrees of any node is at most one, maintaining balanced performance.', 'Heights of subtrees differ by at most one.', ARRAY['Nodes have an equal number of children.', 'All levels are completely filled.', 'All leaves are at the same level.', 'Heights of subtrees differ by at most one.']);


INSERT INTO cards (id, genre, qtype, question, answer, correct_option, options) VALUES
(DEFAULT, 'ai', 'Knowledge', 'What does AI stand for?', 'AI stands for "Artificial Intelligence," which refers to the simulation of human intelligence in machines programmed to perform tasks like reasoning, problem-solving, and learning.', 'Artificial Intelligence', ARRAY['Automated Intelligence', 'Artificial Information', 'Advanced Intelligence', 'Artificial Intelligence']),

(DEFAULT, 'ai', 'Knowledge', 'Which is NOT an application of AI?', 'Word processors, like Microsoft Word, do not rely on AI. The others involve AI for interpreting data, recognizing images, or synthesizing speech.', 'Word processors', ARRAY['Self-driving cars', 'Word processors', 'Image recognition', 'Speech synthesis']),

(DEFAULT, 'ai', 'Conceptual', 'What is the goal of Machine Learning?', 'Machine Learning aims to improve a machine`s performance with experience, enabling it to learn from data and adapt.', 'To improve with experience', ARRAY['To replace all human jobs', 'To improve with experience', 'To perform only math calculations', 'To make robots walk']),

(DEFAULT, 'ai', 'Knowledge', 'Who is considered the "father of AI"?', 'Alan Turing is often called the "father of AI" due to his foundational work on machine intelligence and the Turing Test.', 'Alan Turing', ARRAY['Alan Turing', 'Isaac Newton', 'Bill Gates', 'Thomas Edison']),

(DEFAULT, 'ai', 'Application', 'Which language is popular for AI development?', 'Python is widely used for AI due to its simplicity, libraries, and large community, making it suitable for data handling and machine learning.', 'Python', ARRAY['HTML', 'Python', 'CSS', 'PHP']),

(DEFAULT, 'ai', 'Conceptual', 'Which of these describes a neural network?', 'A neural network consists of web-like connections between nodes, similar to the human brain`s structure, for processing complex data patterns.', 'Web-like connections', ARRAY['Logical statements', 'Structured tables', 'Web-like connections', 'Flowcharts']),

(DEFAULT, 'ai', 'Application', 'What is Natural Language Processing?', 'NLP (Natural Language Processing) is a field in AI focused on enabling computers to understand, interpret, and respond to human language.', 'Understanding human speech', ARRAY['Converting audio to video', 'Understanding human speech', 'Generating music', 'Translating images']),

(DEFAULT, 'ai', 'Conceptual', 'Which model is based on biological neurons?', 'Neural networks are inspired by biological neurons in the human brain, using a structure of interconnected nodes to process data.', 'Neural networks', ARRAY['Decision trees', 'Neural networks', 'K-means clustering', 'Regression']),

(DEFAULT, 'ai', 'Application', 'Which algorithm is used for face detection?', 'Convolutional Neural Networks (CNNs) are effective for face detection as they specialize in recognizing spatial patterns in images.', 'Convolutional Neural Networks', ARRAY['Decision Trees', 'K-means', 'Convolutional Neural Networks', 'Linear Regression']),

(DEFAULT, 'ai', 'Knowledge', 'What does “Turing Test” assess in AI?', 'The Turing Test assesses a machine`s ability to exhibit human-like intelligence, where it is indistinguishable from a human in conversation.', 'Human-like intelligence', ARRAY['Machine precision', 'Human-like intelligence', 'Speed of calculations', 'Storage capacity']),

(DEFAULT, 'ai', 'Conceptual', 'What is supervised learning?', 'Supervised learning uses labeled data to train models, enabling them to make accurate predictions by learning patterns from known examples.', 'Learning with labeled data', ARRAY['Learning without data', 'Learning with labeled data', 'Predicting without input', 'Training by guessing']),

(DEFAULT, 'ai', 'Application', 'Which AI concept is used in personalized ads?', 'Clustering is often used in ad targeting, grouping users based on interests or behavior, making ad recommendations more personalized.', 'Clustering', ARRAY['Reinforcement learning', 'Supervised learning', 'Regression', 'Clustering']);


INSERT INTO cards (id, genre, qtype, question, answer, correct_option, options) VALUES
(DEFAULT, 'fun', 'Astronomy', 'Which planet is known as the Red Planet?', 'Mars is known as the Red Planet due to its reddish appearance caused by iron oxide on its surface.', 'Mars', ARRAY['Earth', 'Venus', 'Mars', 'Jupiter']),

(DEFAULT, 'fun', 'Biology', 'What is the largest mammal in the world?', 'The blue whale is the largest mammal, reaching lengths of up to 100 feet and weighing as much as 200 tons.', 'Blue whale', ARRAY['Elephant', 'Giraffe', 'Great white shark', 'Blue whale']),

(DEFAULT, 'fun', 'History', 'In what year did the Titanic sink?', 'The Titanic sank in 1912 after hitting an iceberg on its maiden voyage from Southampton to New York.', '1912', ARRAY['1905', '1912', '1918', '1920']),

(DEFAULT, 'fun', 'Geography', 'What is the capital city of Australia?', 'Canberra is the capital of Australia, chosen in 1908 as a compromise between Sydney and Melbourne.', 'Canberra', ARRAY['Sydney', 'Melbourne', 'Perth', 'Canberra']),

(DEFAULT, 'fun', 'Literature', 'Which fictional detective is famous for saying "Elementary, my dear Watson"?', 'Sherlock Holmes, created by Sir Arthur Conan Doyle, is known for this phrase, although it does not appear in the original books.', 'Sherlock Holmes', ARRAY['Hercule Poirot', 'Sherlock Holmes', 'Miss Marple', 'Philip Marlowe']),

(DEFAULT, 'fun', 'Science', 'How many colors are there in a rainbow?', 'There are seven colors in a rainbow: red, orange, yellow, green, blue, indigo, and violet.', '7', ARRAY['5', '6', '7', '8']),

(DEFAULT, 'fun', 'Physics', 'What is the boiling point of water?', 'Water boils at 100 degrees Celsius (212 degrees Fahrenheit) at sea level.', '100 degrees Celsius', ARRAY['50 degrees Celsius', '90 degrees Celsius', '100 degrees Celsius', '120 degrees Celsius']),

(DEFAULT, 'fun', 'Physics', 'Which famous physicist developed the theory of relativity?', 'Albert Einstein developed the theory of relativity, changing our understanding of space, time, and gravity.', 'Albert Einstein', ARRAY['Isaac Newton', 'Galileo Galilei', 'Albert Einstein', 'Niels Bohr']),

(DEFAULT, 'fun', 'Geography', 'How many continents are there on Earth?', 'There are seven continents on Earth: Asia, Africa, North America, South America, Antarctica, Europe, and Australia.', '7', ARRAY['5', '6', '7', '8']),

(DEFAULT, 'fun', 'Chemistry', 'Which element has the chemical symbol "O"?', 'Oxygen has the chemical symbol "O" and is essential for most life forms on Earth.', 'Oxygen', ARRAY['Osmium', 'Oxygen', 'Gold', 'Iron']),

(DEFAULT, 'fun', 'Geography', 'What is the smallest country in the world?', 'Vatican City is the smallest country, both in size and population, located within Rome, Italy.', 'Vatican City', ARRAY['Monaco', 'San Marino', 'Malta', 'Vatican City']),

(DEFAULT, 'fun', 'Biology', 'What is the largest organ in the human body?', 'The skin is the largest organ, covering and protecting the body and helping to regulate temperature.', 'Skin', ARRAY['Heart', 'Liver', 'Brain', 'Skin']);
