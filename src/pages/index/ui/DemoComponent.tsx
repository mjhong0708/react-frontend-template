import { useState } from "react";

import { Button } from "@/shared/ui/core/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/core/card";

export function DemoComponent() {
  const [count, setCount] = useState(0);

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>
          <h2 className="text-xl font-semibold">Demo Component</h2>
        </CardTitle>
        <CardDescription>This is a demo component.</CardDescription>
        <CardAction>
          <Button onClick={() => setCount(count + 1)}>Increment Count</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>This is the content</p>
        <div className="bg-foreground/10 rounded-sm p-2 text-center text-lg mt-4">Count: {count}</div>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">This is the footer of the card.</p>
      </CardFooter>
    </Card>
  );
}
