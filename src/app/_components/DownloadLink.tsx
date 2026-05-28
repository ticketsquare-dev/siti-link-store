interface Props {
  initialStoreUrl: string;
}

export default function DownloadLink({ initialStoreUrl }: Props) {
  return (
    <a
      aria-label="Siti 앱 다운로드"
      className="download-link"
      href={initialStoreUrl}
    >
      앱 다운로드
    </a>
  );
}
