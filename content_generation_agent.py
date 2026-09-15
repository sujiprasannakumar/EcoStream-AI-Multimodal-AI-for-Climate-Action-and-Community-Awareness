from ai_models.granite_service import generate_with_granite
from ai_models.rag.retriever import retrieve_context

def create_campaign(topic, audience):
    context = retrieve_context(topic)
    prompt = f'''Create a short, responsible climate-awareness campaign.
Topic: {topic}
Audience: {audience}
Verified context: {context}
Return a title, short script, and three practical actions.
Avoid unsupported claims and greenwashing.'''

    generated = generate_with_granite(prompt)

    return {
        "topic": topic,
        "audience": audience,
        "title": generated.get("title", f"Act for {topic.title()}"),
        "script": generated.get("script", generated.get("text", "")),
        "actions": generated.get("actions", [
            "Use public transport when practical",
            "Reduce single-use materials",
            "Share verified environmental information"
        ]),
        "mode": generated.get("mode", "mock")
    }
