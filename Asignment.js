// ১. Variable কী ?

    //ভেরিয়েবল হল একটা ধারক বা পাত্রের মত। মনে করুন আপনি এক লিটার পানি সংরক্ষন করতে চান তাহলে আপনার একটি পাত্র দরকার হবে যার ধারন ক্ষমতা ১ লিটার বা ১ লিটার থেকে বেশি। একইভাবে প্রোগ্রামিং করার সময় যখন কোন ডাটা সংরক্ষন করার দরকার হয় তখন আমাদের একটি মেমরী স্পেস দরকার হয়। এই মেমরী স্পেসকেই প্রোগ্রামের ভাষায় ভেরিয়েবল বলে।

// ২. Variable কীভাবে লিখতে হয় ?

    //ex:
        var test = "Hello World";
        console.log(test)

// ৩. String type variable কি ও কি ভাবে লিখতে হয় ?

    // ("") ডাবল কোট বা (' ') সিঙ্গেল কোটের ভিতরে যা লেখা হয় ভ্যারিয়বেলের ভ্যালু তাকে String type variable বলা হয় । স্ট্রিং এর অর্থ টেক্সট ।
     //ex:
        var sType = "Hello World"
        var StYpe = 'Hello World'

// ৪. Number type variable কি ও কিভাবে লিথতে হয় ?
    //("") ডাবল কোটেশন বা (' ') সিঙ্গেল কোটশন ছাড়া যখন কোনো সংখ্যা বা নাম্বার লিখা হয় তাকে Number type variable বলা হয় ।
    //ex:
        var numType = 420;

// ৫. Boolan type variable কি ও কি ভাবে লিখতে হয় ?
    //এটি এমন variable type যেটি দিয়ে শুধু সত্য মিথ্যা যাচাই করা হয়। 
    //ex:
        var booLtype = 2>5;
        console.log(booLtype)

// ৬. ToUpperCase() & toLowerCase() এর ব্যবহার কিভাবে করতে হয় ?
    //toUpperCase() & toLowerCase() এই দুইটি ফাংশন দ্বারা কোনো শব্দ বা ওয়ার্ড কে বড় থেকে ছোট এবং ছোট থেকে বড় করার কাজে ব্যবহার করা হয়।
    //ex:
        var rocona = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
        
        console.log(rocona.toUpperCase())
        
        var rocona = "LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S STANDARD DUMMY TEXT EVER SINCE THE 1500S, WHEN AN UNKNOWN PRINTER TOO";
    
        console.log(rocona.toLowerCase())
// ৭. JavaScript এর মোট কয়টি অপারেটর আছে ও কি কি ?
    //JavaScript এর মোট ৫ টি অপারেটর আছে। যথা: ১) + , ২) - , ৩) * , ৪) / , ৫) % ,

// ৮. Math.abs() এর ব্যবহার লিখ ?
    //কোনো ঋনাত্তক সংখ্যা কে ধনাত্তক এ রুপান্তর এর জন্য Math.abs() ব্যবহারিত হয়।
    //ex:
        var num1 = -20;
        var sum = Math.abs(num1);
        console.log(sum)
// ৯. Math.ceil() এর ব্যবহার লিখ ?
    //Math.ceil() ব্যবহার করলে সংখ্যা সবসময় উপরের দিকে অগ্রসর হয়। এর ফলে 0.5 = 1 হয় এবং 0.0001 ব্যবহার করলেও 1 হয়।
    //ex:
        var votar = 0.4;

        var sum = Math.ceil(votar);

        console.log(sum)
// ১০. Math.floor() এর ব্যবহার লিখ ?
    //Math.floor() ব্যবহার করলে সংখ্যা সবসময় নিচের দিকে অগ্রসর হয়। এর ফলে 0.5 = 0 হয় এবং 0.0001 ব্যবহার করলেও 0 হয়।
    //ex:
        var num1 = 0.5;
        var sum = Math.floor(num1);
        console.log(sum)
// ১১. Math.round() এর ব্যবহার লিখ ?
    //Math.round() ব্যবহার করলে 0.5 এর উপরে হলে 1 হবে এবং 0.5 এর নিচে হলে 0 হবে।
    //ex:
        var votar = 0.6
        var sum = Math.round(votar);
        console.log(sum)

        var votar = 0.4
        var sum = Math.round(votar);
        console.log(sum)
// ১২. Math.random() এর ব্যবহার লিখ ?
    //Math.random() ব্যবহার এর ফলে বারবার এলোমেলো বা নতুন নাম্বার পাওয়া যায়।
    //ex:
        var sum = Math.random() * 10;
        console.log(sum)