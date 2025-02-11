export function naturalTime(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    const intervals = [
        { label: "year", seconds: 31536000 },
        { label: "month", seconds: 2592000 },
        { label: "day", seconds: 86400 },
        { label: "hour", seconds: 3600 },
        { label: "minute", seconds: 60 },
    ];

    for (const interval of intervals) {
        const count = Math.floor(diffInSeconds / interval.seconds);
        if (count >= 1) {
            return `${date.toISOString().slice(0, 16).replace("T", " ")} | ${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
        }
    }
    console.log(dateString);
    return `${date.toISOString().slice(0, 16).replace("T", " ")} | Just now`;
}