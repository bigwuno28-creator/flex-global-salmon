import { useState } from "react";
import {
  Phone,
  MessageCircle,
  Send,
  Mail,
  X,
} from "lucide-react";

function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {open && (

        <div className="mb-4 w-64 rounded-2xl bg-white shadow-2xl overflow-hidden">

          <a
            href="tel:+31649063119"
            className="flex items-center gap-4 px-5 py-4 hover:bg-slate-100"
          >
            <Phone size={20}/>
            Call Us
          </a>

          <a
            href="https://wa.me/31649063119"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 px-5 py-4 hover:bg-slate-100"
          >
            <MessageCircle size={20}/>
            WhatsApp
          </a>

          <a
            href="https://t.me/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 px-5 py-4 hover:bg-slate-100"
          >
            <Send size={20}/>
            Telegram
          </a>

          <a
            href="mailto:info@flexglobalsalmon.com"
            className="flex items-center gap-4 px-5 py-4 hover:bg-slate-100"
          >
            <Mail size={20}/>
            Email
          </a>

        </div>

      )}

      <button
        onClick={() => setOpen(!open)}
        className="rounded-full bg-blue-700 p-5 text-white shadow-2xl hover:bg-blue-800"
      >
        {open ? <X size={28}/> : <MessageCircle size={28}/>}
      </button>

    </div>
  );
}

export default FloatingContact;