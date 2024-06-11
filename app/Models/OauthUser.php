<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class OauthUser
 * 
 * @property int $id
 * @property string $oauth_name
 * @property int $local_user_id
 * @property string $oauth_user_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property User $user
 *
 * @package App\Models
 */
class OauthUser extends Model
{
	protected $table = 'oauth_user';

	protected $casts = [
		'local_user_id' => 'int'
	];

	protected $fillable = [
		'oauth_name',
		'local_user_id',
		'oauth_user_id'
	];

	public function user()
	{
		return $this->belongsTo(User::class, 'local_user_id');
	}
}
