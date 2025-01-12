import { createRoot } from 'react-dom/client';
import * as React from "react";
import ToastManager from "./ToastManager";
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
const PORTAL_ID = "react-toast";
class Toaster {
    constructor() {
        this.closeAll = () => {
            if (this.removeAll) {
                this.removeAll();
            }
        };
        this.bindNotify = (fn, removeAll, closeToast) => {
            this.createNotification = fn;
            this.removeAll = removeAll;
            this.closeToast = closeToast;
        };
        this.notify = (message, options = {}) => {
            if (this.createNotification) {
                return this.createNotification(message, options);
            }
        };
        this.close = (id, position) => {
            if (this.closeToast) {
                this.closeToast(id, position);
            }
        };
        if (!isBrowser) {
            return;
        }
        let portalElement;
        const existingPortalElement = document.getElementById(PORTAL_ID);
        if (existingPortalElement) {
            portalElement = existingPortalElement;
        }
        else {
            const el = document.createElement("div");
            el.id = PORTAL_ID;
            el.className = "Toaster";
            if (document.body != null) {
                document.body.appendChild(el);
            }
            portalElement = el;
        }
        const root = createRoot(portalElement);
        root.render(React.createElement(ToastManager, { notify: this.bindNotify }));
    }
}
export default Toaster;
