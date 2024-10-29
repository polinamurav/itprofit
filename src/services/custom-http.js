export class CustomHttp {
    static async request(url, method = "GET", body = null) {
        try {
            const params = {
                method: method,
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(body),
            };

            const response = await fetch(url, params);
            const result = await response.json();

            if (response.ok) {
                return { status: "success", msg: result.message };
            } else {
                return {
                    status: "error",
                    fields: result.fields || { general: result.message }
                };
            }

        } catch (error) {
            return {status: "error", fields: {general: "Ошибка сервера, попробуйте позже"}};
        }
    }
}