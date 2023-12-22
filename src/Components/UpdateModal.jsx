import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import { Fragment, useState } from "react";
import toast from "react-hot-toast";

const UpdateModal = ({ closeModal, isOpen }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const data = await axios.put("");
      console.log(data);
      if (data.insertedId) {
        toast.success("update successfully");
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Payment successful
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Your payment has been successfully submitted. We’ve sent you
                    an email with all of the details of your order.
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
export default UpdateModal;

//   <form onSubmit={handleSubmit} className="">
//   <div className="mt-2">
//     <label htmlFor="location" className="block text-gray-600">
//       Property Title
//     </label>
//     <input
//       type="text"
//       name="task"
//       id="task"
//       placeholder="add task"
//       className=" bg-gray-800 px-3 py-2 border focus:ring-none rounded-md border-gray-900 focus:outline-[#1c4456]  text-white"
//       data-temp-mail-org="0"
//       required
//     />
//     <div className="space-y-1 text-sm">
//       <label
//         htmlFor="description"
//         className="block text-gray-600"
//       >
//         Description
//       </label>

//       <textarea
//         id="description"
//         className="block rounded-md focus:[#1c4456] w-full h-32 px-4 py-3 text-gray-800  border border-[#1c4456] focus:outline-[#1c4456] "
//         name="description"
//         placeholder="Minimum 10 characters "
//       ></textarea>
//     </div>
//   </div>

//   <div className="mt-4 flex gap-3">
//     <button
//       type="button"
//       className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
//       onClick={closeModal}
//     >
//       Cancel
//     </button>
//     <button
//       type="submit"
//       className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
//     >
//       Send
//     </button>
//   </div>
// </form>
