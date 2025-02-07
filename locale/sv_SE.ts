export default {
	locale: "Svenska (Sverige)",
	// Common / Repeated words and phrases
	common: {
		appName: "7TV",
		appHost: "7tv.app",
		supportEmail: "kathy{'@'}7tv.app",
		learnMore: "Läs mer",
		more: "Mer",
		retry: "Försök igen",
		back: "Tillbaka",
		download: "Hämta | Nedladdningar",
		features: "Funktioner",
		comments: "Kommentarer",
		search: "Sök",
		update: "Uppdatera",
		report: "Rapportera",
		delete: "Radera",
		cancel: "Avbryt",
		submit: "Skicka",
		activity: "Aktivitet",
		loading: "Laddar",
		save_changes: "Spara ändringar",
		reset: "Återställ",
		object: {
			user: "Användare",
			emote_set: "Emote set",
			emote: "Emote",
		},
	},
	// Text that appears on the home page
	home: {
		slogan: "Emoteplattformen för alla",
		app_description: "Hantera hundratals av emotes för din Twitch- eller Youtubekanal med lätthet",
		why_app: "Varför @:common.appName{'?'}",
		download_browser: "Webbläsartillägg",
		download_mobile: "Mobilapp",
		download_misc: "Andra appar",
		features: {
			emote_sets: {
				name: "Emote set",
				detail: "Gruppera emotes i anpassningsbara set som kan delas med andra användare eller snabbt bytas ut till din kanal.",
			},
			many_emote_slots: {
				name: "Tillgång till hundratals av emotes",
				detail: "Börja med {0} emotes, med ett möjligt maximum av {1} helt gratis.",
			},
			channel_emote_names: {
				name: "Kanalbundet emote-alias",
				detail: "Gillar du inte namnet på en emote given av dess skapare? Det är okej, du kan ändra namnet på den för din kanal.",
			},
			real_time: {
				name: "Realtid",
				detail: "Ändring av emotes på din kanal sker omedelbart för alla tittare. Ingen F5 krävs.",
			},
			emote_versions: {
				name: "Hantera versioner av emotes",
				detail: "Byt mellan tematiserade varianter eller uppdatera en emote till en förbättrad version.",
			},
			userbase: {
				name: "Stor gemenskap",
				detail: "@:common.appName betjänar {0}+ dagliga unika användare och har ett bibliotek med över {1} publika emotes",
			},
			next_gen: {
				name: "Nästa generations bildformat som WEBP och AVIF",
				detail: "Vi använder nyare och mer optimerade bildformat för att minska bandbreddsanvändningen.",
			},
			source_available: {
				name: "Källkod tillgänglig",
				detail: "Hela vår kodbas finns tillgänglig på GitHub med en källkodslicens. Vem som helst kan se och bidra.",
			},
		},
		socials: {
			discord: "Gå med i @:common.appName på Discord",
			discord_online_count: "{0} online nu",
			twitter: "Följ oss på Twitter",
			github: "Bidra",
		},
		legal: {
			terms: "Användarvillkor",
			privacy: "Sekretesspolicy",
			unaffiliated: "@:common.appName är inte associerat med Twitch Interactive",
		},
	},
	// Nav Bar
	nav: {
		home: "Hem",
		about: "About",
		emotes: "Emotes",
		store: "Prenumerera",
		admin: "Administratör",
		sign_in: "Logga in",
		user_search: "Sök profiler",
		locale_contribute: "Översätt @:common.appName{'!'}",
		wip_notice: {
			heading: "Välkommen till den nya @:common.appName webbplatsen",
			text1: "Detta är en tidig förhandsvisning av nästa sätt att uppleva @:common.appName{'.'}",
			text2: "Utforska vad som är nytt och ge oss lite feedback! Observera att det kommer att genomgå snabba förändringar och kan komma att gå sönder ofta.",
		},
	},
	activity: {
		emote_created: "Skapad {T}",
		emote_renamed: "Bytte namn på {T} från {O} till {N}",
		emote_listing_approved: "Godkände {T} för offentlig visning",
		emote_listing_revoked: "Tog bort {T} från offentlig visning",
		emote_merged: "Sammanfogade {T} med {0}",
		emote_ownership_transferred: "Överfört ägarskap av {T} till {U}",
		emote_restored: "Återställde {T}",
		emote_updated: "Ändrade egenskaper för {T}",
		emote_deleted: "Raderade {T}",
		emote_tags_updated: "Sätt taggar för {T}: {N}",
		emote_processed: "Utförde ett nytt bearbetningsjobb för {T}",
		emote_version_created: "Skapade version '{VER}' för {T}",
		emote_version_renamed: "Bytte namn på version '{VER}' för {T} från {1} till {2}",
		emote_version_approved: "Godkände version '{VER}' för {T} för offentlig visning",
		emote_version_restored: "Återställde version '{VER}' för {T}",
		emote_version_deleted: "Raderade version '{VER}' för {T}",
		emote_flag_added: "Lade till flagga {FLAG} i {T}",
		emote_flag_removed: "Tog bort flagga {FLAG} från {T}",
		user_created: "Skapade {T}",
		user_deleted: "Raderade {T}",
		user_editor_added: "Lade till {U} som redigerare",
		user_editor_added_other: "Lade till {U1} som redigerare för {U2}",
		user_editor_updated: "Uppdaterade redigeringsprivilegier för {U}",
		user_editor_updated_other: "Uppdaterade redigeringsprivilegier för {U1}, en redigerare av {U2}",
		user_editor_removed: "Återkallade {U}'s redigerarprivilegier",
		user_editor_removed_other: "Återkallade {U1}'s redigerarprivilegier för {U2}",
		user_banned: "Bannade {T}",
		user_unbanned: "Ban har tagits bort för {T}",
		user_updated: "Ändrade egenskaper för {T}",
		user_sign_in: "{T} har loggat in",
		user_sign_out: "{T} har loggat ut",
		user_forbidden: "{T} nekades tillgång till {0}",
		emote_set_created: "Skapade {T}",
		emote_set_emote_added: "Lade till emote {AE} i {T}",
		emote_set_emote_removed: "Emote {AE} har tagits bort från {T}",
		emote_set_emote_renamed: "Emote {AE} döptes om från {O} till {N} i {T}",
		emote_set_updated: "Ändrade egenskaper för {T}",
	},
	// Text that is relevant to emotes
	emote: {
		add: "Lägg till emote",
		author: "Tillagd av",
		created_at: "Skapad",
		versions: "Versioner",
		preview_loading: "Laddar förhandsvisningar... {'('}{0}{'/'}{1}{')'}",
		preview_failed: "Kunde inte ladda förhandsvisningar",
		processing: "Bearbetar emote - detta kan ta lite tid.",
		processing_failed: "Bearbetning misslyckades: {0}",
		use: "Använd emote",
		use_menu: "Lägg till denna emote till...",
		switch_version: "Byt till denna version",
		in_n_sets: "i {0} set | i {0} set",
		disable: "Inaktivera emote",
		properties: "Egenskaper",
		new_version: "Ny version",
		report: "Rapportera emote",
		Privacy: "Sekretess",
		comments: "Kommentarer",
		channels: "Kanaler",
		common_names: "Andra namn för denna emote",
		usage_stats: "Emotestatistik",
		no_longer_available: "Denna emote är inte längre tillgänglig",
		tags: "Taggar",
		add_tag: "Lägg till tagg",
		trending_rank: "#{0} på Trending",
		avif_no_support:
			"Tyvärr, {BROWSER} stöder inte AVIF-formatet. Prova att uppdatera till en nyare version eller försök med en annan webbläsare.",
		delete_prompt: {
			heading: "Radera {0}",
			heading_versions: "Radera version '{0}' av {1}",
			notice: "Är du säker på att du vill radera emoten {0}{'?'}",
			notice_versions: "Är du säker på att du vill radera version '{0}' från {1}{'?'}",
			reason: "Anledning för borttagning",
		},
		properties_prompt: {
			heading: "Redigera {0}",
		},
		unlisted: {
			heading: "Se upp!",
			warning: "Denna emote är inte offentligt listad.",
			warning_flagged: "Denna emote har avlistats av följande skäl: {FLAG_LIST}",
			notice: "Den kan läggas till i din kanal, men vi kan inte verifiera om det är säkert att visa på en livestream.",
			notice_flagged:
				"Den kan läggas till i din kanal, men vi anser att det är osäkert att visa på en livestream.",
			show_button: "Visa emote",
			flag_sexual_content: "Sexuellt eller sexuellt suggestivt innehåll",
			flag_epilepsy: "Snabbt blinkande / anfallsinducerande",
			flag_edgy: "Kränkande eller osmaklig",
			flag_twitch_banned: "Otillåten på Twitch",
		},
		list: {
			searching: "Söker",
			emote_count: "{0} emotes",
			no_emotes_listed: "Inga emotes hittades",
			fetching_slowly: "Förlåt, detta verkar ta ett tag",
			category: {
				name: "Kategori",
				top: "Topp",
				trending: "Trendande",
				featured: "Utvalda",
				global: "Globala",
				new: "Nya",
			},
			filters: {
				case_sensitive: "Skiftlägeskänslig",
				exact_match: "Exakt matchning",
				ignore_tags: "Ignorera taggar",
			},
		},
		upload: {
			emote_name: "Emotename",
			version_name: "Versionsnamn",
			version_description: "Versionens beskrivning",
			submit_emote: "Skicka emote",
			create_emote_version: "Skapa emoteversion",
			image_upload: "Ladda upp bild",
			accepted_formats: "Godkända format",
			filetype: "Fil",
			animation: "Animation",
			transparency: "Transparens",
			emote_details: "Emotedetaljer",
			version_details: "Versionsinformation",
			attribution: "Egenskap",
			original_creator: "Ursprunglig skapare",
			as_child: "Du skapar en {IS_DIVERGED} version av {0}. ",
			content_moderation: "Moderering av innehåll",
			half_transparency_tooltip:
				"Pixlar kan endast vara helt transparenta eller helt ogenomskinliga (ingen variabel transparens)",
		},
	},
	emote_set: {
		create: "Nytt @:common.object.emote_set",
		select: "Välj @:common.object.emote_set",
		explain: {
			section: "Vad är ett emote set?",
			hint: "Emote sets är en samling av emotes som kan bindas till dina kanaler eller delas med andra användare.",
		},
		no_space: "Slots Full",
		none_selected: "Inget set valt",
		editing: "Redigerar {0}",
		owner: "{USER}'s Emote set",
		owned: "Ägda Emote set",
		label_renamed: "Bytte namn",
		label_conflict: "Konflikt",
		label_default: "Standard",
		label_actor: "Aktiverad av {0}",
		// "enabled by <display_name of actor>"
		context_emote_add: "Lägg till i {SET_NAME}",
		context_emote_remove: "Ta bort från {SET_NAME}",
		modal: {
			selected_channel_count: "ingen kanal vald | {0} kanal valda | {0} kanaler valda",
			create_button: "Skapa @:common.object.emote_set",
			rename_in_set: "Byt namn i {0}",
			context_rename: "Anpassa emotenamn",
			context_set_default: "Tilldela som standard",
			context_unset_default: "Ta bort som standard",
		},
	},
	// Text that is relevant to users
	user: {
		emote_sets: "Emote set",
		channel_emotes: "Kanal-emotes",
		joined_at: "Gick med i {0}",
		editors: "Redigerare",
		roles: "Roller",
		connections: "Kanaler | Kanaler & Konton",
		new_connections: "Länka konton...",
		add_editor: "Lägg till redigerare",
		editor_modal_heading: "Ändra {0}'s redigerare",
		editor_modal_user_search: "Vem vill du lägga till som redigerare?",
		editor_modal_user_update: "Redigerare",
		no_channel_emotes: "{0} har inga emotes på sin {1} kanal",
		no_channels: "{0} har inga kanaler anslutna!",
		card: {
			view_full_profile: "Visa fullständig profil",
		},
		settings: {
			button: "Redigera profil",
			section_profile: "Profil",
			username: "Användarnamn",
			display_name: "Visat namn",
			profile_picture: "Profilbild",
			section_badges: "Märken",
			section_paints: "Färger",
			no_badges: "Du äger inga märken",
			no_paints: "Du äger inga färger",
			sign_out: "Logga ut",
			cosmetics_updated: "Kosmetika uppdaterad",
			cosmetics_updated_message: "Det kan ta mellan 10 till 30 minuter innan dina ändringar visas i chatten.",
		},
		editor_permissions: {
			modify_emotes: "Ändra kanal-emotes",
			use_private_emotes: "Använd privata emotes",
			manage_profile: "Hantera profil",
			manage_owned_emotes: "Hantera ägda emotes",
			manage_emote_sets: "Hantera emote-set",
			manage_billing: "Hantera fakturering",
			manage_editors: "Hantera redigerare",
			view_messages: "Visa meddelanden",
		},
	},
	store: {
		subscribe_cta: "Bli en @:common.appName prenumerant!",
		subscribed: "Tack för din prenumeration",
		button_self: "Prenumerera",
		button_gift: "Ge bort en prenumeration",
		billing_information_heading: "Faktureringsuppgifter",
		payment_information_heading: "Betalningsinformation",
		payment_gift_heading: "Välj mottagare för denna gåva",
		payment_methods: "Betalningsalternativ",
		payment_methods_hint: "Välj betalningsmetod",
		payment_method_paypal: "PayPal",
		payment_method_stripe: "Kreditkort",
		payment_popup_cta: "Slutför transaktionen i det nya fönstret",
		pay_button: "Betala via {0}",
		product_type_subscription: "Prenumeration",
		purchase_success: {
			heading: "Köpet lyckades",
			text1: "Vi har mottagit din betalning och din prenumeration har aktiverats.",
			text2: "Tack för ditt stöd! Om du har några frågor, vänligen kontakta oss via de metoder som finns på denna sida.",
		},
		sub: {
			incentive: "Du får...",
			creator_tier: "Extra för skapare",
			creator_tier_desc: "Uppgradera till Skapar-nivån och få extra coolhet för din kanal",
			feature_t1_badge: "Prenumerantmärke",
			feature_t1_paints: "Namnfärger",
			feature_t1_animated_profile_picture: "Animerad profilbild",
			feature_t1_zero_width: "Emotes utan bredd",
			feature_t1_global_raffle: "Biljett för global emote-lotteri",
			feature_t1_personal_emotes: "Personliga emotes",
			feature_t2_animated_profile_banner: "Animerad profilbanner",
			feature_t2_animated_offline_screen: "Animerad offlineskärm",
			feature_t2_extended_sub_emotes: "Utökade prenumerantemotes",
			current_plan: "Din plan",
			cancel: "Förnya inte",
			update_payment: "Uppdatera betalningsmetod",
			reactivate: "Återaktivera prenumeration",
			cancel_prompt: "Är du säker på att du vill avbryta din prenumeration?",
			state_heading: "Din prenumeration",
			state_badge_progress: "Märkesutveckling",
			state_paints: "Färger",
			state_anniversary:
				"Din prenumerations årsdag är idag | Din nästa årsdag är om {0} dag | Din nästa prenumerations årsdag är om {0} dagar",
			state_age: "Du prenumererade idag | Du har prenumererat i {0} dag | Du har prenumererat i {0} dagar",
			state_ending:
				"Din prenumeration slutar idag | Din prenumeration slutar om {0} dag | Din prenumeration slutar om {0} dagar",
			state_collection_heading: "Samling",
			state_paints_heading: "Upplåsta färger ({0})",
			state_raffle: "Globalt emotelotteri",
			state_leaderboards: "Toppgivare",
			raffle: {
				starts_at: "{0} dagar",
				starts_at_hint: "Nästa lotteri startar den {0}",
			},
		},
	},
	// Text that is relating to the reporting system
	reporting: {
		report: "Rapportera",
		emote_reason: {
			i_made_this: "Jag skapade denna emote men den laddades upp av någon annan",
			duplicate: "Denna emote är en dubblett",
			pornographic: "Denna emote innehåller pornografiskt eller alltför sexualiserat bildspråk",
			violence_gore: "Denna emote visar extremt våld eller gore",
			i_appear_there: "Denna emote avbildar mig och jag gillar det inte",
			offensive: "Jag tycker att denna emote är kränkande",
			other: "Annat",
		},
		uncategorized_prompt: "Vad är problemet?",
		details: "Detaljer (ytterligare information och/eller bevis för din rapport)",
		success: "Rapporten har skickats",
		notify: "Du kommer att meddelas via inkorgen när din rapport hanteras eller ytterligare information efterfrågas.",
		complete_step_one: "Fortsätt",
		abuse_notice: "Missbruk av rapportfunktionen kan leda till att din åtkomst återkallas.",
	},
	// Text that is relevant to the inbox
	inbox: {
		inbox: "Inkorg",
		tabs: {
			all: "Alla meddelanden",
			unread: "Oläst",
			important: "Viktigt",
		},
		unread_tag: "Oläst",
		// System inbox messages
		generic: {
			emote_listed: {
				subject: "Emote godkänd för listning",
				content: `
# Din emote "{EMOTE_NAME}" godkändes för uppladdning \n
Den kommer nu att finnas tillgänglig i emote-katalogen och kommer att börja visas på @:common. ppHost{'.'}
`,
			},
			emote_not_listed: {
				subject: "Emote blev nekad för uppladdning",
				content: `
# Din emote "{EMOTE_NAME}" nekades
Den kommer inte att vara tillgänglig via vår offentliga emote-katalog eller synlig på @:common. ppHost,
men kommer att förbli tillgänglig för användare med länken.
`,
			},
			emote_ownership_claim_request: {
				subject: "Inbjudan till att bli ägare av en emote",
				content: `
## {OWNER_DISPLAY_NAME} Vill at du ska bli ägaren av '{EMOTE_NAME}'

[Visa Emote]({EMOTE_URL})

**[Acceptera begäran]({EMOTE_CLAIM_URL})** | [Neka begäran]({EMOTE_DECLINE_URL})
						`,
			},
			client_banned: {
				subject: "Du har blivit bannad",
				reason: {
					pornographic_content: "",
				},
				content: `
# Kontot är bannat
Din åtkomst till @:common.appName är nu begränsad.<br/><br/>
### Anledning till denna åtgärd
{BAN_REASON} <br/><br/>
### Begränsningar tillämpade<br/>
{EFFECT_NO_PERMISSIONS}
{EFFECT_NO_AUTH}
{EFFECT_NO_OWNERSHIP}
{EFFECT_MEMORY_HOLE}

<br/>Detta beslut löper ut **{BAN_EXPIRE_AT}**.
_Om du tror att detta är ett misstag, vänligen maila @:common.supportEmail{'.'}_
`,
				effect: {
					no_permissions: "* Du får inte längre interagera med appen",
					no_auth: "* Du får inte längre logga in",
					no_ownership: "* Allt innehåll som du har skapat kommer inte längre att vara tillgängligt",
					memory_hole: "* Du kommer inte vara synlig för andra användare",
					ip_blocked: "* Din IP-adress är blockerad från att komma åt alla @:common.appName tjänster",
				},
			},
			report_closed: {
				subject: "Rapport stängd",
				content: `
Tack för att du meddelat oss, din rapport {'#'}{CASE_ID} har hanterats.
				`,
			},
		},
	},
	// 404 Messages
	notFound: {
		troll_despair: "Det gick inte att hitta den",
		doctor_wtf: "Vad i helvete är det här?",
		pot_friend: "Jag är en pot, friend",
	},
};
