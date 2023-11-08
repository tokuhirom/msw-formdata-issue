import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

describe("test", () => {
  it("test", async () => {
    const server = setupServer();

    const endpoint = "https://example.com/foobar";

    server.use(
      http.put(endpoint, async ({ request, params, cookies }) => {
        return HttpResponse.json({});
      }),
    );
    server.listen();

    const formData = new FormData();
    formData.append("file", new Blob(["testdata"], { type: "text/plain" }));

    const resp = await fetch(endpoint, {
      method: "PUT",
      body: formData,
    });

    const res = await resp.json();

    console.log(res);

    server.close();
  });
});

