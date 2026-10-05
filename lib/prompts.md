## Day/Night Image Generation Prompt

Please add this prompt in the chatGPT and enable the image generation.

```
{
   "role":"Daytime hero section (bright blue-sky scene)",
   "aspect_ratio":"16:9",
   "style":"Studio Ghibli / Makoto Shinkai anime aesthetic, hand-painted, crisp clean linework, saturated greens and blues",
   "mood":"Peaceful, serene, midday summer light, 'remote work in nature'",
   "prompt":"Anime-style illustration, wide cinematic landscape. A young person with short dark hair, seen from behind, sits on a simple wooden chair at a small wooden desk working on an open laptop.
  They are perched on a grassy clifftop meadow blanketed with colorful wildflowers (cosmos and daisies in pink, white, blue, yellow). A large leafy tree arches over the upper-right of the frame, the bright sun
  bursting through its foliage in a lens flare. The meadow overlooks a sweeping curved sandy beach and vivid turquoise-to-deep-blue ocean below. Brilliant blue sky filled with soft fluffy cumulus clouds.
  Subject right-of-center, vast open seascape filling the left two-thirds, rule-of-thirds, eye-level.",
   "negative_prompt":"text, watermark, distorted hands, extra limbs, blurry"
}

Make the aspect ratio 16:9
```

> Use the following prompt after the image gets generated in the same chat.

```
Keep the exact same composition, character pose, desk, laptop, tree, beach, ocean and flowers, do not move or redraw anything. Only change the time of day from bright midday to warm  golden-hour sunset. Lower the sun to sit just above the horizon over the ocean, casting a glowing golden reflection path across the water. Shift the whole palette to warm amber, peach and soft gold tones; turn the blue sky into a pastel peach-and-amber sunset with softly lit clouds. Make the tree leaves and grass glow gold in the low backlight, add gentle warm rim-light on the figure, and soften everything with a dreamy hazy sunset atmosphere.
```

## Video Generation Prompt

Use this prompt in the Google gemini with pro model and enable the video creation
With this prompt please add your image as well.

```
Gentle breeze rustling the large tree leaves and vibrant wildflowers in the foreground. Sun rays shimmering and dappling through the branches. Ocean waves gently lapping onto the distant sandy beach. Fluffy white clouds drifting very slowly across the bright blue sky. The man subtly types on the laptop, his head bobbing slightly to the music in his headphones. Peaceful, serene atmosphere, subtle cinematic motion.

Do not change the frame, view, perspective, composition, or camera angle. No zooming, panning, tilting, shaking, drifting, rotating, cropping, or parallax camera motion. No scene cuts, no new objects, no new people, no birds close to camera, no animals, no dramatic wind, no typing animation, no large character movement, no laptop movement, no changing screen content, no lighting transition, no weather change, no warping, no flicker, no distorted hands, no text, no logos.

Animate only subtle natural motion within the existing frame: gentle ocean waves rolling softly toward the shore, small sparkling highlights shimmering on the water, slow cloud drift, sunlight glinting through the tree leaves, delicate leaf movement in a light breeze, and flowers and grass swaying softly. The shifting leaf shadows may move very slightly across the table and the seated person.

Do not move the head of the person.
```
