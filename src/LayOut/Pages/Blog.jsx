import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
const Blog = () => {
    const pdfRef = useRef();
    const downloadPdf = () => {
        const input = pdfRef.current;
        html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4', true);
        const pdfWidth = pdf.internal.pageSize.getWidth(); const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth/imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 500;
        pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight, ratio);
        pdf.save('invoice.pdf');
        });
    };
    return (
        <>
        <div className="flex items-center justify-center " ref={pdfRef}>
            <div className="bg-white">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold">
                        Frequently Asked Questions <button class="rounded-full text-black bg-blue-400 py-2 px-5 font-bold text-xl text-center ms-10" onClick={downloadPdf}>Download</button>
                    </h2>
                    <p className="mt-4 mb-8 text-gray-600">
                        Important Interview Questions And Answers
                    </p>
                    <div className="space-y-4">
                        <details className="w-full rounded-lg ring-1 ring-purple-600">
                            <summary className="px-4 py-6 font-extrabold text-2xl">
                            Tell us the differences between uncontrolled and controlled components.
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 text-xl font-medium">
                            In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
                            </p>
                        </details>
                        <details className="w-full rounded-lg ring-1 ring-purple-600">
                            <summary className="px-4 py-6 font-extrabold text-2xl">
                            How to validate React props using PropTypes?? 
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 text-xl font-medium">
                            React PropTypes validators
                                1.any : The prop can be of any data type.
                                2.bool : The prop should be a Boolean.
                                3.number : The prop should be a number.
                                4.string : The prop should be a string.
                                5.func : The prop should be a function.
                                6.array : The prop should be an array.
                                7.object : The prop should be an object.
                            </p>
                        </details>
                        <details className="w-full rounded-lg ring-1 ring-purple-600">
                            <summary className="px-4 py-6 font-extrabold text-2xl">
                            Tell us the difference between nodejs and express js.
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 text-xl font-medium">
                            js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.
                            </p>
                        </details>
                        <details className="w-full rounded-lg ring-1 ring-purple-600">
                            <summary className="px-4 py-6 font-extrabold text-2xl">
                            What is a custom hook, and why will you create a custom hook?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 text-xl font-medium">
                            Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.
                            </p>
                        </details>
                    </div>
                </div>
            </div>
        </div>

        
        </>
    );
};

export default Blog;