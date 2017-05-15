import com.google.firebase.analytics.FirebaseAnalytics;
import android.os.Bundle;

public class PerceivalAnalytics{

	Bundle bundle = new Bundle();
	private FirebaseAnalytics mFirebaseAnalytics;

//-----------------------------------------------------------------------------
	// The following are wrapped methods from https://firebase.google.com/docs/reference/android/com/google/firebase/analytics/FirebaseAnalytics

	// Retrieves the app instance id from the service
	public Task<String> getAppInstanceId(){
		return FirebaseAnalytics.getAppInstanceID();
	}

	// Create instance of perceival analytics
	public int getInstance(Context context){
		mFirebaseAnalytics = FirebaseAnalytics.getInstance(context);
		return 0;
	}

	// Logs an app event
	public int logEvent(){
		mFirebaseAnalytics.logEvent(FirebaseAnalytics.Event.SELECT_CONTENT, bundle);
		// Clear the bundle so next time you use it it's fresh
		bundle.clear();
	}

	// Sets whether analytics collection is enabled for this app on this device.
	public int setAnalyticsCollectionEnabled(boolean enabled){
		FirebaseAnalytics.setAnalyticsCollectionEnabled(enabled);
		return 0;
	}

	// Sets the current screen name, which specifies the current visual context in your app.
	public int setCurrentScreen(Activity activity, String screenName, String screenClassOverride){
		mFirebaseAnalytics.setCurrentScreen(activity, screenName, screenClassOverride);
		return 0;
	}

	// Sets the minimum engagement time required before starting a session. The default value is 10000 (10 seconds)
	public int setMinimumSessionDuration(long milliseconds){
		mFirebaseAnalytics.setMinimumSessionDuration(milliseconds);
		return 0;
	}

	// Sets the duration of inactivity that terminates the current session. The default value is 1800000 (30 minutes)
	public int setSessionTimeoutDuration(long milliseconds){
		mFirebaseAnalytics.setSessionTimeoutDuration(milliseconds);
		return 0;
	}

	// Sets the user ID property
	public int setUserId(String id){
		mFirebaseAnalytics.setUserId(id);
		return 0;
	}

	// Sets a user property to a given value.
	public int setUserProperty(String name, String value){
		mFirebaseAnalytics.setUserProperty(name, value);
		return 0;
	}
//-----------------------------------------------------------------------------

	// Additional functions to make the user experience better
	public int addToBundle(String param, String value){
		switch (param){
			case "ITEM_ID":
				bundle.putString(FirebaseAnalytics.Param.ITEM_ID, value);
				break;
			case "ITEM_NAME":
				bundle.putString(FirebaseAnalytics.Param.ITEM_NAME, value);
				break;
			case "CONTENT_TYPE":
				bundle.putString(FirebaseAnalytics.Param.CONTENT_TYPE, value);
				break;
			default:
				return -1;
		}
		return 0;
	}
	
}










