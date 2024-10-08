import Link from "next/link";

export default function LinkComponent({ children, href, ...props }) {
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}
