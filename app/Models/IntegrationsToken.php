<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class IntegrationsToken
 * 
 * @property int $id
 * @property int $integration
 * @property string $data
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class IntegrationsToken extends Model
{
	protected $table = 'integrations_tokens';

	protected $casts = [
		'integration' => 'int'
	];

	protected $fillable = [
		'integration',
		'data'
	];
}
