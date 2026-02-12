// Not found section styles
export const notFoundStyles = {
    section: "bg-blue-400 px-5 md:px-15 py-15 md:py-25",
    container: "text-white text-center",
    title: "text-5xl md:text-8xl font-extrabold mb-4",
    description: "text-2xl font-medium tracking-wider mb-8",
    button: "bg-red-500 px-6 font-medium md:px-8 py-3 rounded hover:bg-red-600"
}

export const ui = {
    Button: {
        baseClasses: "px-4 py-3 w-full rounded font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
        variants: {
            primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
            secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
            outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
            success: "bg-green-100 text-green-900 hover:bg-green-300 focus:ring-green-500"
        },
        loadingContainer: "flex items-center justify-center",
        loading: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"
    },
    Input: {
        inputContainer: "space-y-1",
        label: "block text-sm font-medium text-gray-700",
        input: "w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
        border: "border-gray-300",
        errorBorder: "border-red-500",
        errorText: "text-sm text-red-600",
    },
    Select: {
        selectContainer: "space-y-1",
        label: "block text-sm font-medium text-gray-700",
        select: "w-full px-3 py-2 border rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
        border: "border-gray-300",
        errorBorder: "border-red-500",
        errorText: "text-sm text-red-600",
    },
    Modal: {
        container: "fixed bg-black/40 backdrop-blur-md inset-0 z-50 overflow-y-auto",
        wrapper: "flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0",
        modalClose: "fixed inset-0 bg-opacity-75 transition-opacity",
        header: {
            container: "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
            wrapper: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
            content: "sm:flex sm:items-start",
            headerContainer: "t-3 sm:mt-0 sm:text-left w-full",
            title: "text-lg leading-6 font-medium text-gray-900 mb-4 pb-2 border-b border-gray-300",
        },
        btn: {
            container: "bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",
            buttonClose: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm",
        },
    },
    Skeleton: {
        container: "animate-pulse bg-gray-200 rounded",
    },
    Toast: {
        container: "fixed bottom-4 right-4 z-50 animate-slide-up",
        wrapper: "text-white px-6 py-3 rounded-lg shadow-lg flex items-center",
        message: "",
        icon: "",
    }
}