import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function DashboardTempMessage({ userName }: { userName: string }) {
  return (
    <Card className="relative">
      <CardHeader>
        <CardTitle className="leading-8 text-pink-500">
          {`Welcome to Summarize AI, ${userName}! 🖐️`}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="w-full mb-4 leading-7">
          <span>
            Currently, this website is in development, released for testing.{" "}
            <br />
            You are given 10 free credit upon signup! Use them to try the
            feature. <br />
            <br />
            To check your account, click on Account <br />
            To check your previous summaries, click on Summaries <br />
            <br />
            For inquiries or concerns, reach me at
            <a href={`mailto:kynd.b.tech@gmail.com?`}> kynd.b.tech@gmail.com</a>
            <br />
            <br />
            <br />
            Thank you!
          </span>
        </p>
      </CardContent>
    </Card>
  );
}

export default DashboardTempMessage;
