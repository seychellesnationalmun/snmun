import { notFound } from "next/navigation";
/** Never expose management content before staff authentication, MFA and RLS are active. */
export default function AdminOverview(){notFound()}
